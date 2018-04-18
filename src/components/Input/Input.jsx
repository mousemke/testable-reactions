// @flow
import React, { Component } from 'react';

import styles from './Input.css';

/**
 * ## Input
 *
 * contains a styled input field
 */
export default class Input extends Component<any> {
  input: ?HTMLInputElement;

  /**
   * ## render
   *
   * renders a styled input and handles its events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { className, placeholder } = this.props;

    return (
      <input
        ref={el => (this.input = el)}
        placeholder={placeholder}
        className={`${styles.input}  ${className || ''}`}
      />
    );
  }
}
