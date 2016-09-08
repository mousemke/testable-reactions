/* globals window */
import './App.less';

import React, { Component } from 'react';
import { getCurrentRoute }  from '/router';
import version              from '/version';


/**
 * ## App
 *
 * main back office component
 *
 * @package Backoffice
 */
export default class App extends Component
{
    /**
     * ## constructor
     *
     * sets the inital state, binds functions, and sets the version
     *
     * @return {Void} void
     */
    constructor()
    {
        super();

        this.getCurrentRoute    = getCurrentRoute;
        this.onRouteChange      = this.onRouteChange.bind( this );


        window.addEventListener( 'hashchange', this.onRouteChange );

        Object.defineProperty( this, 'version', {
            value : version
        } );
    }


    /**
     * ## onRouteChange
     *
     * sets the route in the state. linked to 'hashchange'
     *
     * @return {Void} void
     */
    onRouteChange()
    {
        this.setState( {
            route : this.getCurrentRoute()
        } );
    }


    /**
     * ## render
     *
     * renders the app.  contains the logic for what to show,
     * depending on whether or not you're logged in
     *
     * @return {JSX} compiled jsx
     */
    render()
    {
        return (
            <div className="js-test-div">
                probably delete me
            </div>
        );
    }
}


Object.defineProperty( App, 'version', {
    value : version
} );
