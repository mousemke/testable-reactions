// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Fish from '../../components/fish/Fish.jsx';
import fishActions from '../../redux/action-builders/fish';
// import { bindActionCreators } from 'redux';

export class HomePage extends React.Component {
  render() {
    return (
      <section>
        <Fish {...this.props} />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    timestamp: state.fish.timestamp,
  };
}

const mapDispatchToProps = dispatch => fishActions(dispatch).actions;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
