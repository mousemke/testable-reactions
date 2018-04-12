// @flow
import Torment from 'torment';
import { exec } from 'child_process';
import path from 'path';
import isPortAvailable from 'is-port-available';
import variables from '../../variables';
import tormentTargets from './tormentTargets';

declare var describe: Function;
declare var it: Function;
declare var before: Function;
declare var after: Function;

const {
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
  TORMENT_SERVER_HOST,
  TORMENT_SERVER_PORT,
} = variables;

const servers = {};

const SHOW = process.env.SHOW;
const DEBUG = process.env.DEBUG;

console.warn('\n');

function startServer(serverCommand, port, name) {
  let server;

  isPortAvailable(port).then(status => {
    if (status) {
      server = exec(serverCommand);
      console.warn(`${name} server started`);

      if (DEBUG) {
        server.stdout.on('data', data => {
          console.warn(`stdout: ${data}`);
        });

        server.stderr.on('data', data => {
          console.warn(`stderr: ${data}`);
        });
      }

      server.on('close', (code, signal) => {
        if (code) {
          console.warn(`${name} server exited with code ${code}`);
        } else {
          console.warn(`${name} server exited with signal ${signal}`);
        }
      });

      servers[name] = server;
    } else {
      console.error(
        `port ${port} is not available. ${name} server already started?`
      );
      servers[name] = null;
    }
  });
}

startServer(
  `http-server ./.torment/.baseline/ -p ${TORMENT_SERVER_PORT} -a ${TORMENT_SERVER_HOST} -s --push-state`,
  TORMENT_SERVER_PORT,
  'baseline'
);
startServer('npm start', DEV_SERVER_PORT, 'dev');

let waitForBaseline = true;

describe('\ntestable reactions', () => {
  new Torment(
    `http://${TORMENT_SERVER_HOST}:${TORMENT_SERVER_PORT}`,
    `http://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}`,
    {
      pngPath: path.resolve(process.cwd(), './.torment'),
      targets: tormentTargets,
      show: !!SHOW,
    },
    (torment, size) => {
      const { label, width, height } = size;

      describe(`${label} : ${width} x ${height}`, () => {
        if (waitForBaseline) {
          before(function*() {
            waitForBaseline = false;
            yield torment.wait(7000); // wait for the localhost to spin up
          });
        }

        it('Root', function*() {
          yield torment.test('/');
        });

        it('404', function*() {
          yield torment.test('/badUrl');
        });
      });

      after(function*() {
        yield torment.end();
      });
    }
  );

  after(() => {
    const { baseline, dev } = servers;

    if (baseline) {
      console.warn('killing baseline server');
      baseline.kill();
    }

    if (dev) {
      console.warn('killing dev server');
      dev.kill();
    }
  });
});
