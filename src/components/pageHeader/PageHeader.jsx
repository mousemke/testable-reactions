// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import pageHeaderActions from '../../redux/action-builders/pageHeader';

import Input from '../input/Input.jsx';
import Button from '../button/Button.jsx';

import styles from './PageHeader.css';

/**
 * ## Pageheader
 *
 * top of the page
 */
class Pageheader extends Component<any> {
  static defaultProps = {
    name: 'anonymous',
  };

  props: {
    name: string,
    searchTerm: string,
    amountClicked: number,
    onChangeSearchTerm: Function,
    onSearchButtonClick: Function,
  };

  /**
   * ## render
   *
   * renders the header with search
   *
   * @return {JSX} compiled jsx
   */
  render() {
    const {
      name,
      searchTerm,
      amountClicked,
      onChangeSearchTerm,
      onSearchButtonClick,
    } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.loginWrapper}>Hello {name}</div>
          <Link to="/" className={styles.homeButton}>
            Home
          </Link>
          <Link to="/nmm" className={styles.homeButton}>
            Somewhere
          </Link>
          <Input placeholder={'Search'} onChange={onChangeSearchTerm} />
          <Button
            title={`Submit (${amountClicked})`}
            value={searchTerm}
            onButtonClick={onSearchButtonClick}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { amountClicked, searchTerm } = state.pageHeader;

  return {
    amountClicked,
    searchTerm,
  };
}

const mapDispatchToProps = dispatch => pageHeaderActions(dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Pageheader);
