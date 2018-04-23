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

  static defaultProps = {
    className: '',
    placeholder: '',
    onChange: () => {},
  };

  props: {
    className: string,
    placeholder: string,
    onChange: Function,
  };

  /**
   * ## render
   *
   * renders a styled input and handles its events
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { className, placeholder, onChange } = this.props;

    return (
      <input
        ref={el => (this.input = el)}
        placeholder={placeholder}
        className={`${styles.input}  ${className || ''}`}
        onChange={onChange}
      />
    );
  }
}
