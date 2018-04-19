// @flow
import assert from 'assert';
import React from 'react';
import Home from '../../../src/pages/home/Home.jsx';
import Timestamp from '../../../src/components/timestamp/Timestamp.jsx';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The Home component', () => {
  it('should show the timestamp', () => {
    const home = shallow(<Home />);

    assert.equal(home.childAt(0).is(Timestamp), true);
  });
});
