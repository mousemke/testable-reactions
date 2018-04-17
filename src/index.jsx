// @flow
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import configureStore from './redux/stores/configureStore';

const body = document.body;

if (body) {
  const store = configureStore();
  const rootApp = document.createElement('div');

  body.appendChild(rootApp);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootApp
  );
}
