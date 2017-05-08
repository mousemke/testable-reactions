/* globals document */
import React            from 'react';
import ReactDom         from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App              from './components/App.jsx';
import Fish             from '/components/fish/Fish.jsx';

ReactDom.render(
    <Router history={ browserHistory }>
        <Route component={ App }>
            <Route path="/"                         component={ Fish } />
            <Route path="*"                         component={ () =>
                                                <div>404 - No Route</div> } />
        </Route>
    </Router>, document.getElementById( 'app' )
);
