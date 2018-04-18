// @flow
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger();

export const testingMiddleware = [reduxThunk];

export default [logger, reduxThunk];
