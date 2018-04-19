// @flow
import assert from 'assert';

import configureMockStore from 'redux-mock-store';
import { testingMiddleware } from '../../../src/redux/middleware';

import { TIMESTAMP_ACTION_TYPES } from '../../../src/constants/actionTypes';
import { getTime } from '../../../src/redux/actions/timestamp';
import timestampActions from '../../../src/redux/action-builders/timestamp';

const mockStore = configureMockStore(testingMiddleware);

declare var describe: Function;
declare var it: Function;

describe('The Timestamp actions', () => {
  it('should correctly dispatch getTime', () => {
    const initialState = {
      timestamp: {
        now: 0,
      },
    };

    const store = mockStore(initialState);

    store.dispatch(getTime());

    const firedAction = store.getActions()[0];

    assert.equal(firedAction.type, TIMESTAMP_ACTION_TYPES.GET_TIME);
    assert.ok(firedAction.now > 1524134858587); // when test was written ^^
  });
});

describe('The Timestamp action-builder', () => {
  it('should correctly fire the onTimestampView', () => {
    const initialState = {
      timestamp: {
        now: 0,
      },
    };

    const store = mockStore(initialState);

    const actions = timestampActions(store.dispatch);

    actions.onTimestampView();

    const firedAction = store.getActions()[0];

    assert.equal(firedAction.type, TIMESTAMP_ACTION_TYPES.GET_TIME);
    assert.ok(firedAction.now > 1524134858587); // when test was written ^^
  });
});
