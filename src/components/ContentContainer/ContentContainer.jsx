// @flow
import React, { Component } from 'react';

import styles from './ContentContainer.css';

/**
 * ## ContentContainer
 *
 * central content container
 */
export default class ContentContainer extends Component<any> {
  static defaultProps = {
    title: '',
  };

  props: {
    children: ?Array<any>,
    title: string,
  };

  /**
   * ## render
   *
   * renders the container
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.headerText}>{title}</div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
