// @flow
import assert from 'assert';
import React from 'react';
import { Route } from 'react-router-dom';
import App from '../../src/components/App.jsx';
import Fish from '../../src/components/fish/Fish.jsx';
import FourOhFour from '../../src/components/fourOhFour/FourOhFour.jsx';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The App component', () => {
  it('should show the initial div', () => {
    const wrapper = shallow(<App />);

    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;

      return pathMap;
    }, {});

    assert.deepEqual(pathMap['/'], Fish);
    assert.deepEqual(pathMap['*'], FourOhFour);
  });
});
