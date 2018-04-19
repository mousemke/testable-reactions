// @flow
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import PageHeader from '../../../src/components/pageHeader/PageHeader.jsx';

import configureMockStore from 'redux-mock-store';
import { testingMiddleware } from '../../../src/redux/middleware';

const mockStore = configureMockStore(testingMiddleware);

declare var describe: Function;
declare var it: Function;

describe('The PageHeader component', () => {
  it('should have the correct elements', () => {
    const initialState = {
      pageHeader: {
        amountClicked: 100,
        searchTerm: 'moon',
      },
    };

    const store = mockStore(initialState);

    const pageHeader = mount(
      <BrowserRouter>
        <PageHeader store={store} />
      </BrowserRouter>
    );

    assert.equal(pageHeader.find('a').length, 2);
    assert.equal(pageHeader.find('input').length, 1);
    assert.equal(pageHeader.find('button').length, 1);
  });
});
