// @flow
/* globals global */
import { JSDOM } from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import hook from 'css-modules-require-hook';

hook({
  extensions: ['.css'],
  generateScopedName: '[name]__[local]___[hash:base64:5]',
});

Enzyme.configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');

global.window = jsdom.window;
global.document = jsdom.window.document;

global.navigator = {
  userAgent: 'node.js',
};
