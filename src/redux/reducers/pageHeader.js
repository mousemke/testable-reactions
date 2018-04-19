// @flow
import { PAGE_HEADER_ACTION_TYPES } from '../../constants/actionTypes';

export type PageHeaderState = {
  +amountClicked: ?number,
  +previousSearches: Array<string>,
};

export type PageHeaderAction =
  | {
      type: 'CLICK_SEARCH_BUTTON',
      amountClicked: number,
      previousSearches: Array<string>,
    }
  | { type: 'CHANGE_SEARCH_TERM', searchTerm: string };

const initialState = {
  amountClicked: 0,
  previousSearches: [],
};

export default function(
  state: PageHeaderState = initialState,
  action: PageHeaderAction
) {
  switch (action.type) {
    case PAGE_HEADER_ACTION_TYPES.CLICK_SEARCH_BUTTON:
      return clickSearchButton(state, action);
    case PAGE_HEADER_ACTION_TYPES.CHANGE_SEARCH_TERM:
      return changeSearchTerm(state, action);
  }

  return state;
}

function changeSearchTerm(state, action) {
  const { searchTerm } = action;

  return {
    ...state,
    searchTerm,
  };
}

function clickSearchButton(state, action) {
  const { amountClicked, previousSearches } = action;

  return {
    ...state,
    amountClicked,
    previousSearches,
  };
}
