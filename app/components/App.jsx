import './App.css';


import React, { Component } from 'react';
import Fish                 from '/components/fish/Fish.jsx';

/**
 * ## App
 *
 * app wrapper around the site
 */
export default class App extends Component
{
    /**
     * ## constructor
     *
     * @return {Void} void
     */
    constructor()
    {
        super();

        this.state = {};
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
            <div className="AppWrapper">
                <Fish />
            </div>
        );
    }
}
