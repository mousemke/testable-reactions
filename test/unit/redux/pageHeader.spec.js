// @flow
import assert from 'assert';

import configureMockStore from 'redux-mock-store';
import { testingMiddleware } from '../../../src/redux/middleware';

import { PAGE_HEADER_ACTION_TYPES } from '../../../src/constants/actionTypes';
import {
  searchButtonClick,
  changeSearchTerm,
} from '../../../src/redux/actions/pageHeader';
import pageHeaderActions from '../../../src/redux/action-builders/pageHeader';

const mockStore = configureMockStore(testingMiddleware);

declare var describe: Function;
declare var it: Function;

describe('The PageHeader actions', () => {
  it('should correctly dispatch changeSearchTerm', () => {
    const initialState = {
      pageHeader: {
        searchTerm: '',
      },
    };

    const store = mockStore(initialState);

    store.dispatch(
      changeSearchTerm({
        target: {
          value: 'moon',
        },
      })
    );

    const firedActions = store.getActions();

    const expectedPayload = {
      type: PAGE_HEADER_ACTION_TYPES.CHANGE_SEARCH_TERM,
      searchTerm: 'moon',
    };

    assert.deepEqual(firedActions, [expectedPayload]);
  });

  it('should correctly dispatch searchButtonClick', () => {
    const initialState = {
      pageHeader: {
        amountClicked: 0,
        previousSearches: [],
      },
    };

    const store = mockStore(initialState);

    store.dispatch(searchButtonClick());

    const firedActions = store.getActions();

    const expectedPayload = {
      type: PAGE_HEADER_ACTION_TYPES.CLICK_SEARCH_BUTTON,
      amountClicked: 1,
      previousSearches: [''],
    };

    assert.deepEqual(firedActions, [expectedPayload]);
  });
});

describe('The PageHeader action-builder', () => {
  it('should correctly fire the onChangeSearchTerm', () => {
    const initialState = {
      pageHeader: {
        searchTerm: '',
      },
    };

    const store = mockStore(initialState);

    const actions = pageHeaderActions(store.dispatch);

    actions.onChangeSearchTerm({ target: { value: 'moon' } });

    const firedActions = store.getActions();

    const expectedPayload = {
      type: PAGE_HEADER_ACTION_TYPES.CHANGE_SEARCH_TERM,
      searchTerm: 'moon',
    };

    assert.deepEqual(firedActions, [expectedPayload]);
  });

  it('should correctly fire the onSearchButtonClick', () => {
    const initialState = {
      pageHeader: {
        amountClicked: 0,
        previousSearches: [],
      },
    };

    const store = mockStore(initialState);

    const actions = pageHeaderActions(store.dispatch);

    actions.onSearchButtonClick();

    const firedActions = store.getActions();

    const expectedPayload = {
      type: PAGE_HEADER_ACTION_TYPES.CLICK_SEARCH_BUTTON,
      amountClicked: 1,
      previousSearches: [''],
    };

    assert.deepEqual(firedActions, [expectedPayload]);
  });
});
