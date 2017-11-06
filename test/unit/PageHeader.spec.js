// @flow
import assert from 'assert';
import React from 'react';
import PageHeader from '../../src/components/pageHeader/PageHeader.jsx';
import styles from '../../src/components/pageHeader/PageHeader.css';

import { shallow } from 'enzyme';

declare var describe: Function;
declare var it: Function;

describe('The PageHeader component', () => {
  it('should show the page header', () => {
    const pageHeader = shallow(<PageHeader />);

    assert.equal(pageHeader.is(`.${styles.pageHeaderWrapper}`), true);
  });
});
