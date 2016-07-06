
import assert           from 'assert';
import React            from 'react';
import ReactDOM         from 'react-dom';
import ReactTestUtils   from 'react-addons-test-utils';
import Login            from '/components/login/Login';

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';

const noop  = function(){};


let login   = shallow( <Login onLogin={ noop }/> );



describe( 'The Login component', () =>
{
    it( 'should correctly express the login state', () =>
    {   
        assert.equal( login.find( '.login-page.login-failed' ).length, 0 );
        assert.equal( login.find( '.login-page' ).length, 1 );
        
        login.setState( { awaiting: false, failed: true, email: '', password: '' } );

        assert.equal( login.find( '.login-page.login-failed' ).length, 1 );
        assert.equal( login.find( '.login-page' ).length, 1 );
    } );


    it( 'button should correctly express loading state', () =>
    {
        login.setState( { awaiting: true, failed: false, email: '', password: '' } );

        assert.equal( login.find( '.primary.loading' ).length, 1 );
        assert.equal( login.find( '.primary' ).length, 1 );
        
        login.setState( { awaiting: false, failed: false, email: '', password: '' } );

        assert.equal( login.find( '.primary.loading' ).length, 0 );
        assert.equal( login.find( '.primary' ).length, 1 );
    } );


    it( 'inputs should have onChange events bound', () =>
    {   
        assert.equal( login.state().email, '' );
        login.find( '.login__email' ).simulate( 'change', { target: { value: 'such value' } } );
        assert.equal( login.state().email, 'such value' );

        assert.equal( login.state().password, '' );
        login.find( '.login__password' ).simulate( 'change', { target: { value: 'such value' } } );
        assert.equal( login.state().password, 'such value' );
    } );
} );



describe( 'componentDidUpdate', () =>
{
    let loginInstance   = login.instance();
    let state           = login.state();

    it( 'should be false if there was not a change', () =>
    {
        let changed = loginInstance.componentDidUpdate( {}, state );

        assert.equal( changed, false );
    } );


    it( 'should be true if there was a change', () =>
    {
        state.failed    = !state.failed;
        let changed     = loginInstance.componentDidUpdate( {}, state );

        assert.equal( changed, true );
    } );
} );



describe( 'onLogin', () =>
{
    let loginInstance   = login.instance();
    let _func           = _f => _f;
    let testMessage     = 'onLogin-test';
    let e               = {
                            preventDefault  : _func,
                            stopPropagation : _func
                        };


    it( 'should stop if the page is still awaiting', () =>
    {
        login.setState( { awaiting: true, failed: false, email: '', password: '' } );
        assert.equal( loginInstance.onLogin( e ), 'a bit longer' );

        login.setState( { awaiting: false, failed: false, email: '', password: '' } );
    } );


    it( 'should set a failed login state if it did not recieve a proper `me` object', () =>
    {
        sinon.stub( loginInstance, 'login',  me => Promise.resolve( {} ) );

        loginInstance.onLogin( e ).then( () =>
        {
            assert.equal( login.state().failed, true );
            loginInstance.login.restore();
        } );        
    } );


    it( 'should login if it recieved a proper `me` object', () =>
    {
        sinon.stub( loginInstance, 'login',  me =>
        {
            return Promise.resolve( {
                domain      : testMessage,
                name        : testMessage,
                id          : testMessage
            } );
        } );

        loginInstance.onLogin( e ).then( () =>
        {
            assert.equal( login.state().failed, false );
            assert.equal( login.state().awaiting, false );
            loginInstance.login.restore();
        } );
    } );


    it( 'should fail the promise is rejected', () =>
    {
        sinon.stub( loginInstance, 'login',  me =>
        {
            return Promise.reject( {
                domain      : testMessage,
                name        : testMessage,
                id          : testMessage
            } );
        } );

        loginInstance.onLogin( e ).then( () =>
        {
            assert.equal( login.state().failed, true );
            assert.equal( login.state().awaiting, false );
            loginInstance.login.restore();
        } );
    } );
} );



describe( 'onPasswordChange', () =>
{
    let loginInstance   = login.instance();

    it( 'should update the password in the state on password change', () =>
    {   
        login.setState( { password: 'moo' } );
        login.find( '.login__password' ).simulate( 'change', { target: { value: 'moon' } } );
        
        assert.equal( login.state().password, 'moon' );
    } );
} );
