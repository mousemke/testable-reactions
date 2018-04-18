// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import timestampActions from '../../redux/action-builders/timestamp';

import styles from './Timestamp.css';

/**
 * ## Timestamp
 *
 * contains a timestamp
 */
class Timestamp extends Component<any> {
  static defaultProp = {
    text: '',
  };

  props: {
    now: number,
    text: string,
    onTimestampView: Function,
  };

  timestamp: ?HTMLDivElement;
  timestampWrapper: ?HTMLDivElement;

  componentDidMount() {
    this.props.onTimestampView();
  }

  /**
   * ## render
   *
   * renders the timestamp
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const { now, text } = this.props;

    return (
      <div
        ref={el => (this.timestampWrapper = el)}
        className={styles.timestampWrapper}
      >
        <div
          ref={el => (this.timestamp = el)}
          className={styles.timestamp}
          now={now}
        >
          {`${text} ${now}`}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    now: state.timestamp.now,
  };
}

const mapDispatchToProps = dispatch => timestampActions(dispatch).actions;

export default connect(mapStateToProps, mapDispatchToProps)(Timestamp);
