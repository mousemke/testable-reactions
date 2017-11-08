import Niffy from 'niffy';
import { exec } from 'child_process';
import path from 'path';
import niffyTargets from './niffyTargets';

function startBaselineServer() {
  const baseline = exec('npm run serve:niffy');

  baseline.stdout.on('data', data => {
    console.warn(`stdout: ${data}`);
  });

  baseline.stderr.on('data', data => {
    console.warn(`stderr: ${data}`);
  });

  baseline.on('close', (code, signal) => {
    if (code) {
      console.warn(`child process exited with code ${code}`);
    } else {
      console.warn(`child process exited with signal ${signal}`);
    }
  });

  return baseline;
}

const SHOW = process.env.SHOW;
const baselineServer = startBaselineServer();

let waitForBaseline = true;

describe('testable reactions', () => {
  new Niffy(
    'http://localhost:6061',
    'http://localhost:6060',
    {
      pngPath: path.resolve(process.cwd(), './niffy'),
      targets: niffyTargets,
      show: !!SHOW,
    },
    (niffy, size) => {
      const { label, width, height } = size;

      describe(`${label} : ${width} x ${height}`, () => {
        if (waitForBaseline) {
          before(function*() {
            waitForBaseline = false;
            yield niffy.wait(5000); // wait for the localhost to spin up
          });
        }

        it('Root', function*() {
          yield niffy.test('/');
        });

        it('404', function*() {
          yield niffy.test('/jadsz');
        });
      });

      after(function*() {
        yield niffy.end();
      });
    }
  );

  after(() => {
    console.warn('Closing baseline');
    baselineServer.kill();
  });
});
