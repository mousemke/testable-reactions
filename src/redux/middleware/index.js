// @flow
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export default [logger, reduxThunk];
