
import React, { Component } from 'react';

import './Fish.css';


/**
 * ## Fish
 *
 * contains a fish
 */
export default class Player extends Component
{
    /**
     * ## render
     *
     * renders the fish
     *
     * @return {JSX} compiled jsx
     */
    render()
    {
        return (
            <div ref="fishWrapper" className="fishWrapper">
                <div ref="fish" className="fish"></div>
            </div>
        );
    }
}
