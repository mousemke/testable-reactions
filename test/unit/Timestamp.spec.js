// @flow
import React from 'react';
import assert from 'assert';
import { mock } from 'sinon';
import { shallow, mount } from 'enzyme';

import Timestamp from '../../src/components/Timestamp/Timestamp.jsx';
import styles from '../../src/components/timestamp/Timestamp.css';

declare var describe: Function;
declare var it: Function;
declare var beforeEach: Function;

describe('The Timestamp component', () => {
  let props = {};

  beforeEach(() => {
    props = {
      now: 100,
      getTime: mock(() => 666),
    };
  });

  it('should mount the refs', () => {
    const timestamp = mount(<Timestamp {...props} />);

    assert.equal(
      timestamp.instance().timestampWrapper.toString(),
      '[object HTMLDivElement]'
    );
    assert.equal(timestamp.instance().timestamp.toString(), '[object HTMLDivElement]');
  });

  it('should run getTime after mounting', () => {
    const timestamp = mount(<Timestamp {...props} />);

    assert.equal(props.getTime.callCount, 1);
    assert.equal(timestamp.instance().timestampWrapper.getAttribute('data-seen'), 666);
  });
});
