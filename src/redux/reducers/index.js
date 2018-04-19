// @flow
import { combineReducers } from 'redux';

import timestamp from './timestamp';
import pageHeader from './pageHeader';

export default combineReducers({
  timestamp,
  pageHeader,
});
