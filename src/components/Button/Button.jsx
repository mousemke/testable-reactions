// @flow
import React, { Component } from 'react';

import styles from './Button.css';

/**
 * ## Button
 *
 * cotains a styled button
 */
export default class Button extends Component<any> {
  static defaultProps = {
    className: '',
    title: '',
    onButtonClick: () => null,
  };

  props: {
    className: string,
    title: string,
    onButtonClick: Function,
  };

  /**
   * ## render
   *
   * renders a styled button and handles its events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { className, title, onButtonClick, value } = this.props;

    return (
      <button
        className={`${styles.button} ${className || ''}`}
        onClick={onButtonClick}
        value={value}
      >
        {title}
      </button>
    );
  }
}
