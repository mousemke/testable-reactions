// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pageheader from './components/pageHeader/PageHeader.jsx';
import Home from './pages/home/Home.jsx';
import FourOhFour from './components/fourOhFour/FourOhFour.jsx';
import Fish from './components/fish/Fish.jsx';
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
      <BrowserRouter>
        <div className={`testable-reactions ${styles.appWrapper}`}>
          <Pageheader name={this.props.name} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*" component={FourOhFour} />
          </Switch>
          <Fish />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
