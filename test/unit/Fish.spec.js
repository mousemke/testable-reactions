// @flow
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import Fish from '../../src/components/Fish/Fish.jsx';
import styles from '../../src/components/fish/Fish.css';

declare var describe: Function;
declare var it: Function;
declare var beforeEach: Function;

describe('The Fish component', () => {
  let props = {};

  beforeEach(() => {
    props = {
      timestamp: 100,
      onFishView: sinon.spy(),
    };
  });

  it('should mount the refs', () => {
    const fish = mount(<Fish {...props} />);

    assert.equal(
      fish.instance().fishWrapper.toString(),
      '[object HTMLDivElement]'
    );
    assert.equal(fish.instance().fish.toString(), '[object HTMLDivElement]');
  });

  it('should run onFishView after mounting', () => {
    const fish = mount(<Fish {...props} />);

    assert.equal(props.onFishView.callCount, 1);
    assert.equal(fish.instance().fishWrapper.getAttribute('data-seen'), 100);
  });
});
