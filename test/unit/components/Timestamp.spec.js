// @flow
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import Timestamp from '../../../src/components/timestamp/Timestamp.jsx';

import configureMockStore from 'redux-mock-store';
import { testingMiddleware } from '../../../src/redux/middleware';

const mockStore = configureMockStore(testingMiddleware);

declare var describe: Function;
declare var it: Function;

describe('The Timestamp component', () => {
  it('should run getTime after mounting', () => {
    const initialState = {
      timestamp: {
        now: 100,
      },
    };

    const store = mockStore(initialState);
    mount(<Timestamp store={store} />);

    assert.equal(store.getActions()[0].type, 'GET_TIME');
  });

  it('should set the correct text', () => {
    const now = Date.now();
    const text = 'moon!';

    const initialState = {
      timestamp: {
        now,
      },
    };

    const store = mockStore(initialState);
    const timestamp = mount(<Timestamp store={store} text={text} />);

    assert.equal(timestamp.text(), `moon! ${now}`);
  });

  it('should set the data-now', () => {
    const now = Date.now();

    const initialState = {
      timestamp: {
        now,
      },
    };

    const store = mockStore(initialState);
    const timestamp = mount(<Timestamp store={store} />);

    assert.equal(timestamp.find(`[data-now=${now}]`).length, 1);
  });
});
