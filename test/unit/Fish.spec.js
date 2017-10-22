/* globals describe, it */
import assert from 'assert';
import React from 'react';
import Fish from '../../src/components/fish/Fish.jsx';

import { shallow } from 'enzyme';

describe('The Fish component', () => {
  it('should show the fish', () => {
    const fish = shallow(<Fish />);

    assert.equal(fish.is('.fishWrapper'), true);
  });
});
