// @flow
import assert from 'assert';
import React from 'react';
import FourOhFour from '../../../src/pages/fourOhFour/FourOhFour.jsx';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The FourOhFour component', () => {
  it('should show the 404 message', () => {
    const fourOhFour = shallow(<FourOhFour />).dive();

    assert.equal(fourOhFour.find('.fourOhFour').length, 1);
    assert.equal(fourOhFour.text(), 'Oops!404 - No Route');
  });
});
