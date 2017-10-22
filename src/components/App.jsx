// @flow
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Pageheader from './pageHeader/PageHeader.jsx';
import Fish from './fish/Fish.jsx';

import './App.css';

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
      <div ref={el => (this.appWrapper = el)} className="AppWrapper">
        <BrowserRouter>
          <div>
            <Pageheader name={this.props.name} />
            <Switch>
              <Route path="/" exact component={Fish} />
              <Route path="*" component={() => <div>404 - No Route</div>} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
