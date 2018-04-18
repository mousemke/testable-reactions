// @flow
import React, { Component } from 'react';
import styles from './ContentContainer.css';

/**
 * ## ContentContainer
 *
 * central content container
 */
export default class ContentContainer extends Component<any> {
  /**
   * ## render
   *
   * renders the container
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { title } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.headerText}>{title}</div>
        </div>
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}
