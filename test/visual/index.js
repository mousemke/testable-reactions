import Niffy from 'niffy';
import { exec } from 'child_process';
import path from 'path';
import isPortAvailable from 'is-port-available';
import variables from '../../variables';
import niffyTargets from './niffyTargets';

const {
  DEV_SERVER_HOST,
  DEV_SERVER_PORT,
  NIFFY_SERVER_HOST,
  NIFFY_SERVER_PORT,
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
  `http-server ./niffy/.baseline/ -p ${NIFFY_SERVER_PORT} -a ${NIFFY_SERVER_HOST} -s --push-state`,
  NIFFY_SERVER_PORT,
  'baseline'
);
startServer('npm start', DEV_SERVER_PORT, 'dev');

let waitForBaseline = true;

describe('\ntestable reactions', () => {
  new Niffy(
    `http://${NIFFY_SERVER_HOST}:${NIFFY_SERVER_PORT}`,
    `http://${DEV_SERVER_HOST}:${DEV_SERVER_PORT}`,
    {
      pngPath: path.resolve(process.cwd(), './niffy/tests'),
      targets: niffyTargets,
      show: !!SHOW,
    },
    (niffy, size) => {
      const { label, width, height } = size;

      describe(`${label} : ${width} x ${height}`, () => {
        if (waitForBaseline) {
          before(function*() {
            waitForBaseline = false;
            yield niffy.wait(7000); // wait for the localhost to spin up
          });
        }

        it('Root', function*() {
          yield niffy.test('/');
        });

        it('404', function*() {
          yield niffy.test('/badUrl');
        });
      });

      after(function*() {
        yield niffy.end();
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
