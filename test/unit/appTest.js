
import assert           from 'assert';
import React            from 'react';
import ReactDOM         from 'react-dom';
import ReactTestUtils   from 'react-addons-test-utils';
import App              from '/App';
import Login            from '/components/login/Login';
import Embed            from '/components/embed/Embed.js'

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';

let app     = shallow( <App /> );

describe( 'The App component', () =>
{
    it( 'should not be logged in initially', () =>
    {   
        let state   = app.state();

        assert.equal( state.me, null );
        assert.equal( state.awaiting, true );

        assert.equal( app.find( '.loader' ).length, 1 );
    } );


    it( 'should show the login page after the first api call is complete', () =>
    {
        app.setState( {
            me          : null,
            awaiting    : false,
        } );

        assert.equal( app.find( Login ).length, 1 );
    } );


    it( 'should show embed after logging in', () =>
    {
        app.setState( {
            me          : {
                id          : 'test',
                domain      : 'test',
                name        : 'test'
            },
            awaiting    : false,
        } );

        assert.equal( app.find( Embed ).length, 1 );
    } );


    it( 'should correctly reflect a failed server connection', () =>
    {
        app.setState( {
            failed      : true,
            awaiting    : false,
        } );

        assert.equal( app.find( '.js-failed' ).length, 1 );
    } );
} );



describe( 'checkLogin', () =>
{
    let testMessage = 'checkLogin-test';
    let appInstance = app.instance();
    app.setState( { awaiting: true } );

    it( 'should set the awaiting state to false if not logged in', () =>
    {
        appInstance.fetchMe = sinon.stub().returns( Promise.resolve( {
            domain      : testMessage,
            name        : testMessage
        } ) );

        appInstance.checkLogin().then( state =>
        {
            let me      = state.me;

            assert.equal( me.id, testMessage );
            assert.equal( me.domain, testMessage );
            assert.equal( me.name, testMessage );
        } );
    } );


    it( 'should set the me state to `me` once logged in', () =>
    {        
        appInstance.fetchMe = sinon.stub().returns( Promise.resolve( {
            id          : testMessage,
            domain      : testMessage,
            name        : testMessage
        } ) );

        appInstance.checkLogin().then( state =>
        {
            let me      = state.me;

            assert.equal( me.id, testMessage );
            assert.equal( me.domain, testMessage );
            assert.equal( me.name, testMessage );
        } );
    } );


    it( 'should set the failed state when failing', () =>
    {        
        appInstance.fetchMe = sinon.stub().returns( Promise.reject() );
        appInstance.checkLogin();

        assert.equal( app.state().failed, true );
    } );
} );



describe( 'onLogin', () =>
{
    it( 'should set the state of `me`', () =>
    {
        let testMessage = 'onLogin-test';

        app.instance().onLogin( {
                id          : testMessage,
                domain      : testMessage,
                name        : testMessage
            } );

        let me = app.state().me;

        assert.equal( me.id, testMessage );
        assert.equal( me.domain, testMessage );
        assert.equal( me.name, testMessage );
    } );
} );



describe( 'onLogout', () =>
{
    it( 'should reset the state of `me`', () =>
    {
        app.instance().onLogout().then( () =>
        {
            let state = app.state();

            assert.equal( state.me, null );
            assert.equal( state.awaiting, false );
        } );    
    } );
} );



describe( 'onRouteChange', () =>
{
    it( 'should set the route state to the current route', () =>
    {
        let appInstance = app.instance();

        sinon.stub( appInstance, 'getCurrentRoute',  () =>
        {
            return 'test';
        } );

        appInstance.onRouteChange();
        appInstance.getCurrentRoute.restore();


        let state = app.state();

        assert.equal( state.route, 'test' );
    } );
} );
