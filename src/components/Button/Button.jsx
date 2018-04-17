// @flow
import React, { Component } from 'react';

import styles from './Button.css';

/**
 * ## Button
 *
 * cotains a styled button
 */
export default class Button extends Component<any> {
  button: ?HTMLButtonElement;

  /**
   * ## render
   *
   * renders a styled button and handles its events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { className, title } = this.props;

    return (
      <button
        ref={el => (this.button = el)}
        className={`${styles.button} ${className || ''}`}
      >
        {title}
      </button>
    );
  }
}
