// @flow
import { PAGE_HEADER_ACTION_TYPES } from '../../constants/actionTypes';

/* eslint-disable import/no-unresolved */
import type { Dispatch, GetState } from 'testable-reactions-types';
/* eslint-enable */

export const changeSearchTerm = (e: Object) => (dispatch: Dispatch) => {
  const searchTerm = e.target.value;

  dispatch({
    type: PAGE_HEADER_ACTION_TYPES.CHANGE_SEARCH_TERM,
    searchTerm,
  });
};

export const searchButtonClick = () => (dispatch: Dispatch, getState: GetState) => {
  const state = getState();

  const {
    amountClicked,
    previousSearches,
    searchTerm,
  } = state.pageHeader;

  previousSearches.push(searchTerm);

  dispatch({
    type: PAGE_HEADER_ACTION_TYPES.CLICK_SEARCH_BUTTON,
    amountClicked: amountClicked + 1,
    previousSearches: previousSearches,
  });
};


export default {
  changeSearchTerm,
  searchButtonClick,
};
