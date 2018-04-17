// @flow
import { FISH_ACTION_TYPES } from '../../constants/actionTypes';

/* eslint-disable import/no-unresolved */
import type { Dispatch } from 'testable-reactions-types';
/* eslint-enable */

// export const trackFishView = () => (dispatch, getState) => {
export const trackFishView = () => (dispatch: Dispatch) => {
  dispatch({
    type: FISH_ACTION_TYPES.VIEW_FISH,
    timestamp: Date.now(),
  });
};
