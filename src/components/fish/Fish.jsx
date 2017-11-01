// @flow
import React, { Component } from 'react';

import styles from './Fish.css';

/**
 * ## Fish
 *
 * contains a fish
 */
export default class Fish extends Component<any> {
  fish: ?HTMLDivElement;
  fishWrapper: ?HTMLDivElement;

  /**
   * ## render
   *
   * renders the fish
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return (
      <div ref={el => (this.fishWrapper = el)} className={styles.fishWrapper}>
        <div ref={el => (this.fish = el)} className={styles.fish} />
      </div>
    );
  }
}
