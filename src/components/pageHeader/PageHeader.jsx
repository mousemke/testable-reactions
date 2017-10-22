// @flow
import React, { Component } from 'react';

import './PageHeader.css';

type Props = {
  name: string,
};

/**
 * ## Pageheader
 *
 * top of the page
 */
class Pageheader extends Component<Props> {
  static defaultProps = {
    name: 'anonymous',
  };

  props: Props;

  /**
     * ## render
     *
     * renders the header
     *
     * @return {JSX} compiled jsx
     */
  render() {
    return (
      <div className="page-header__wrapper">
        Hello {this.props.name}, This app seems to be working! Or is it ....
      </div>
    );
  }
}

export default Pageheader;
