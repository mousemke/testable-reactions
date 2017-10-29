// @flow
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const rootApp = document.createElement('div');
rootApp.id = 'app;';
const body = document.body;

if (body) {
  body.appendChild(rootApp);

  ReactDOM.render(<App />, rootApp);
}
