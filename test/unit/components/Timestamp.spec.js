// @flow
import React from 'react';
import assert from 'assert';
import { spy } from 'sinon';
import { shallow, mount } from 'enzyme';

import configureStore from 'redux-mock-store'
import middleware from '../../../src/redux/middleware';

import Timestamp from '../../../src/components/Timestamp/Timestamp.jsx';
import styles from '../../../src/components/timestamp/Timestamp.css';

declare var describe: Function;
declare var it: Function;
declare var beforeEach: Function;
declare var afterEach: Function;

describe('The Timestamp component', () => {
  // let store;
  // let props;

  // beforeEach(() => {
  //   props = {
  //     timestamp: {
  //       now: 100,
  //       getTime: () => 666,
  //     },
  //   };

  //   spy(props.timestamp, 'getTime');

  //   store = configureStore(middleware)(props);
  // });

  it('should mount the refs', () => {
    // const timestamp = mount(<Timestamp store={store}/>);
    // const timestampInstance = timestamp.instance();

    // assert.equal(
    //   timestampInstance.timestampWrapper.toString(),
    //   '[object HTMLDivElement]'
    // );

    // assert.equal(timestampInstance.timestamp.toString(), '[object HTMLDivElement]');
  });

  // it('should run getTime after mounting', () => {
  //   const timestamp = mount(<Timestamp store={store}/>);

  //   assert.equal(props.timestamp.getTime.callCount, 1);
  //   assert.equal(timestamp.instance().timestampWrapper.getAttribute('data-seen'), 666);
  // });

  // afterEach(() => {
  //   props.timestamp.getTime.restore();
  // });
});
