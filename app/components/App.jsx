import React, { Component } from 'react';
import version              from '/version';

import './App.css';


/**
 * ## App
 *
 * app wrapper around the site
 */
class App extends Component
{
    /**
     * ## constructor
     *
     * @return {Void} void
     */
    constructor()
    {
        super();

        this.version    = version;
        this.state      = {};
    }


    /**
     * ## render
     *
     * renders the App. contains a fish.
     *
     * @return {JSX} compiled jsx
     */
    render()
    {
        return (
            <div ref="appWrapper" className="AppWrapper">
                <header>
                    This app seems to be working!
                </header>
                {
                    React.Children.map( this.props.children, child =>
                    {
                        return React.cloneElement( child, this.state );
                    } )
                }
            </div>
        );
    }
}


App.version = version;

export default App;
