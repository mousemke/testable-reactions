// @flow
import React, { Component } from 'react';

import styles from './Button.css';

/**
 * ## Button
 *
 * contains a styled button
 */
export default class Button extends Component<any> {
  button: ?HTMLButtonElement;

  static defaultProps = {
    className: '',
    title: '',
    value: '',
    onButtonClick: () => null,
  };

  props: {
    className: string,
    title: string,
    onButtonClick: Function,
    value: string,
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
        ref={el => (this.button = el)}
        className={`${styles.button} ${className || ''}`}
        onClick={onButtonClick}
        value={value}
      >
        {title}
      </button>
    );
  }
}
