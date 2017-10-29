// @flow
import assert from 'assert';
import React from 'react';
import FourOhFour from '../../src/components/fourOhFour/FourOhFour.jsx';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The FourOhFour component', () => {
  it('should show the 404 message', () => {
    const fourOhFour = shallow(<FourOhFour />);

    assert.equal(fourOhFour.is('.fourOhFour'), true);
    assert.equal(fourOhFour.text(), '404 - No Route');
  });
});
