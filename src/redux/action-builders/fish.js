// @flow
import { trackFishView } from '../actions/fish';

/* eslint-disable import/no-unresolved */
import type { Dispatch } from 'testable-reactions-types';
/* eslint-enable */

export default (dispatch: Dispatch) => ({
  actions: {
    onFishView: () => dispatch(trackFishView()),
  },
});
