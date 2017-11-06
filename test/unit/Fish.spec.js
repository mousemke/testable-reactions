// @flow
import assert from 'assert';
import React from 'react';
import Fish from '../../src/components/fish/Fish.jsx';
import styles from '../../src/components/fish/Fish.css';

import { shallow, mount } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The Fish component', () => {
  it('should show the fish', () => {
    const fish = shallow(<Fish />);

    assert.equal(fish.is(`.${styles.fishWrapper}`), true);
  });

  it('should mount the refs', () => {
    const fish = mount(<Fish />);

    assert.equal(
      fish.instance().fishWrapper.toString(),
      '[object HTMLDivElement]'
    );
    assert.equal(fish.instance().fish.toString(), '[object HTMLDivElement]');
  });
});
