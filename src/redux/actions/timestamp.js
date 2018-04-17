// @flow
import { TIMESTAMP_ACTION_TYPES } from '../../constants/actionTypes';

/* eslint-disable import/no-unresolved */
import type { Dispatch } from 'testable-reactions-types';
/* eslint-enable */

// export const getTime = () => (dispatch, getState) => {
export const getTime = () => (dispatch: Dispatch) => {
  dispatch({
    type: TIMESTAMP_ACTION_TYPES.GET_TIME,
    now: Date.now(),
  });
};
