// @flow
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import ContentContainer from '../../../src/components/contentContainer/ContentContainer.jsx';

declare var describe: Function;
declare var it: Function;

describe('The ContentContainer component', () => {
  it('should render the title', () => {
    const props = {
      title: 'moon',
    };

    const contentContainer = shallow(<ContentContainer {...props} />);

    assert.equal(contentContainer.text(), 'moon');
  });

  it('should render all of its children', () => {
    const contentContainer1 = shallow(
      <ContentContainer>
        <div />
        <div />
        <div />
      </ContentContainer>
    );

    assert.equal(contentContainer1.childAt(1).children().length, 3);

    const contentContainer2 = shallow(
      <ContentContainer>
        <div />
      </ContentContainer>
    );

    assert.equal(contentContainer2.childAt(1).children().length, 1);
  });
});
