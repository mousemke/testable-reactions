// @flow
import {
  searchButtonClick,
  changeSearchTerm,
} from '../actions/pageHeader';

/* eslint-disable import/no-unresolved */
import type { Dispatch } from 'testable-reactions-types';
/* eslint-enable */

export default (dispatch: Dispatch) => ({
  onSearchButtonClick: () => dispatch(searchButtonClick()),
  onChangeSearchTerm: (e) => dispatch(changeSearchTerm(e)),
});
