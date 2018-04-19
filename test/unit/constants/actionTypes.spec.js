// @flow
import assert from 'assert';

import actionTypes, {
  TIMESTAMP_ACTION_TYPES,
  PAGE_HEADER_ACTION_TYPES,
} from '../../../src/constants/actionTypes';

declare var describe: Function;
declare var it: Function;

describe('The default export should contain all separate action types', () => {
  it('should have the correct elements', () => {
    const singleObjectActions = {
      ...TIMESTAMP_ACTION_TYPES,
      ...PAGE_HEADER_ACTION_TYPES,
    };

    Object.keys(singleObjectActions).forEach(action => {
      actionTypes[action] = '';
    });

    const extraActions = Object.values(actionTypes).filter(a => a !== '');

    assert.equal(extraActions.length, 0);
  });
});
