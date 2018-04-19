// @flow
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import Fish from '../../../src/components/fish/Fish.jsx';

declare var describe: Function;
declare var it: Function;

describe('The Fish component', () => {
  it('should render the fish', () => {
    const fish = mount(<Fish />);

    const fishInstance = fish.instance();

    assert.equal(fishInstance.fish.toString(), '[object HTMLDivElement]');
    assert.equal(
      fishInstance.fishWrapper.toString(),
      '[object HTMLDivElement]'
    );
  });
});
