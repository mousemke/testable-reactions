// @flow
import React, { Component } from 'react';

/**
 * ## 404
 *
 * if you cant find anything else
 */
export default class FourOhFour extends Component<any> {
  fish: ?HTMLDivElement;
  fishWrapper: ?HTMLDivElement;

  /**
   * ## render
   *
   * renders the 404 page
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return <div className="fourOhFour">404 - No Route</div>;
  }
}
