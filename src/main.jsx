// @flow
/* global document */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const rootApp = document.getElementById('app');

if (rootApp instanceof HTMLDivElement) {
  ReactDOM.render(<App />, rootApp);
}
