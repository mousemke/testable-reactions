// @flow
import React, { Component } from 'react';
import ContentContainer from '../../components/contentContainer/ContentContainer.jsx';

/**
 * ## 404
 *
 * if you can't find anything else
 */
export class FourOhFour extends Component<any> {
  /**
   * ## render
   *
   * renders the 404 page
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return (
      <ContentContainer title={'Oops!'}>
        <div className="fourOhFour">404 - No Route</div>
      </ContentContainer>
    );
  }
}

export default FourOhFour;
