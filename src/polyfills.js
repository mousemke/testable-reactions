// @flow
/* eslint-disable import/unambiguous */
if (!Promise) {
  require('promise/lib/rejection-tracking').enable(); // eslint-disable-line import/no-commonjs
  window.Promise = require('promise/lib/es6-extensions.js'); // eslint-disable-line import/no-commonjs
}

require('whatwg-fetch'); // eslint-disable-line import/no-commonjs, import/no-unassigned-import

if (!Object.assign) {
  Object.assign = require('object-assign'); // eslint-disable-line import/no-commonjs
}

if (process.env.NODE_ENV === 'TEST') {
  require('raf').polyfill(global); // eslint-disable-line import/no-commonjs
}
/* eslint-enable import/unambiguous */
