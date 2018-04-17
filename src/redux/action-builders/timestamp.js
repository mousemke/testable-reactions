// @flow
import { getTime } from '../actions/timestamp';

/* eslint-disable import/no-unresolved */
import type { Dispatch } from 'testable-reactions-types';
/* eslint-enable */

export default (dispatch: Dispatch) => ({
  actions: {
    onTimestampView: () => dispatch(getTime()),
  },
});
