// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pageheader from './pageHeader/PageHeader.jsx';
import Fish from './fish/Fish.jsx';
import FourOhFour from './fourOhFour/FourOhFour.jsx';

import styles from './App.css';

type Props = {
  name?: string,
};

/**
 * ## App
 *
 * app wrapper around the site
 */
class App extends Component<Props> {
  static defaultProps = {
    name: 'anonymous',
  };

  /**
   * ## render
   *
   * renders the App. contains a sometimes fish.
   *
   * @return {JSX} compiled jsx
   */
  render() {
    return (
      <div className={styles.AppWrapper}>
        <BrowserRouter>
          <div>
            <Pageheader name={this.props.name} />
            <Switch>
              <Route path="/" exact component={Fish} />
              <Route path="*" component={FourOhFour} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
