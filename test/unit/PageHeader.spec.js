/* globals describe, it */
import assert from 'assert';
import React from 'react';
import PageHeader from '../../src/components/pageHeader/PageHeader.jsx';

import { shallow } from 'enzyme';

describe('The PageHeader component', () => {
  it('should show the page header', () => {
    const pageHeader = shallow(<PageHeader />);

    assert.equal(pageHeader.is('.page-header__wrapper'), true);
  });
});
