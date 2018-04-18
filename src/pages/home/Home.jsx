// @flow
import React, { Component } from 'react';
import Timestamp from '../../components/timestamp/Timestamp.jsx';
import ContentContainer from '../../components/contentContainer/ContentContainer.jsx';

export class HomePage extends Component<any> {
  render() {
    return (
      <ContentContainer title={'Dashboard'}>
        <Timestamp {...this.props} text="You arrived at:" />
      </ContentContainer>
    );
  }
}

export default HomePage;
