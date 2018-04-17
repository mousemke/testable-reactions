// @flow
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from '../reducers/';
import middleware from '../middleware/';

let appliedMiddleware = applyMiddleware(...middleware);

if (
  process.env.NODE_ENV !== 'production' &&
  typeof window !== 'undefined' &&
  window.devToolsExtension
) {
  appliedMiddleware = compose(appliedMiddleware, window.devToolsExtension());
}

const createStoreWithMiddleware = appliedMiddleware(createStore);

export default function configureStore(initialState: Object = {}) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
