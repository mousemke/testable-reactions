// @flow
import Nightmare from 'nightmare';
import variables from '../../variables';
import assert from 'assert';

declare var describe: Function;
declare var it: Function;
declare var beforeEach: Function;
declare var afterEach: Function;

const DEBUG = process.env.DEBUG;
const ENV = process.env.ENV || '';

const E2E_HOST = variables[`E2E_${ENV}_SERVER_HOST`];
const E2E_PORT = variables[`E2E_${ENV}_SERVER_PORT`];
const E2E_PROTOCOL = variables[`E2E_${ENV}_SERVER_PROTOCOL`];

function getNightmare() {
  const nightmare = new Nightmare({ show: !!DEBUG });

  if (DEBUG) {
    nightmare.on('consoleMessage', msg => {
      console.warn(`remote> ${msg}`);
    });
  }

  return nightmare;
}

describe('testable reactions', () => {
  let nightmare;

  beforeEach(() => {
    nightmare = getNightmare();
  });

  afterEach(function*() {
    yield nightmare.end();
  });

  it('should check if it finds the 404 page', function*() {
    const fourOhFour = yield nightmare
      .goto(`${E2E_PROTOCOL}://${E2E_HOST}:${E2E_PORT}/this-is-not-a-place`)
      .wait('.testable-reactions')
      .exists('.fourOhFour');

    assert.ok(fourOhFour);
  });
});
