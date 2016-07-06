
import assert           from 'assert';
import React            from 'react';
import Appbar           from '/components/navigation/Appbar';

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';


const onButtonClick = sinon.spy();
const onLogout      = sinon.spy();

let appbar = shallow( <Appbar toggleSidebar={ onButtonClick } onLogout={ onLogout } name="test"/> );

describe( 'The Appbar component', () =>
{
    it( 'should contain the avatar image and name', () =>
    {
        assert.equal( appbar.find( '.js-avatar' ).length, 1 );

        let name = appbar.find( '.js-account-name' );
        assert.equal( name.length, 1 );
        assert.equal( name.text(), 'test' );
    } );


    it( 'should contain functional sidebar controls', () =>
    {
        let sidebarLink = appbar.find( '.js-sidebar-controls' );
        assert.equal( sidebarLink.length, 1 );

        sidebarLink.simulate( 'click' );
        assert.equal( onButtonClick.calledOnce, true );
    } );


    it( 'should contain the log out button', () =>
    {
        let logout = appbar.find( '.js-logout' );
        assert.equal( logout.length, 1 );
        assert.equal( logout.text(), 'Log out' );
    } );
} );
