
import assert           from 'assert';
import React            from 'react';
import Navigation       from '/components/navigation/Navigation';

import Sidebar          from '/components/navigation/Sidebar';
import Appbar           from '/components/navigation/Appbar';

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';


const noop = function(){};


let me          = { name: 'test', image: 'http://dogecoin.com/imgs/doge.png' };
let navigation  = shallow( <Navigation onLogout={ noop } route={ [ 'magazine' ] } me={ me } /> );

sinon.stub( window, 'matchMedia', () => { return { matches: false } } );
let navigationHidden    = shallow( <Navigation onLogout={ noop } route={ [ 'magazine' ] } me={ me } /> );
window.matchMedia.restore();


describe( 'The Navigation component', () =>
{
    it( 'should have the correct class when sidebar is hidden and visible', () =>
    {
        assert.equal( navigationHidden.is( '.Navigation.isSidebarVisible' ), false );
        assert.equal( navigation.is( '.Navigation.isSidebarVisible' ), true );
    } );


    it( 'should have the correct initial state', () =>
    {
        assert.equal( navigationHidden.state().isSidebarVisible, false );
        assert.equal( navigation.state().isSidebarVisible, true );
    } );


    it( 'should contain the Appbar and the Sidebar', () =>
    {
        let navigationMounted = mount( <Navigation onLogout={ noop } route={ [ 'magazine' ] } me={ me } /> );
        assert.equal( navigationMounted.find( '.Appbar' ).length, 1 );
        assert.equal( navigationMounted.find( '.Sidebar' ).length, 1 );
    } );
} );



describe( 'toggleSidebar', () =>
{
    it( 'should correctly toggle the state', () =>
    {
        let navInstance         = navigation.instance();
        let isSidebarVisible    = navInstance.state.isSidebarVisible;

        navInstance.toggleSidebar();
        assert.equal( navInstance.state.isSidebarVisible, !isSidebarVisible );

        navInstance.toggleSidebar();
        assert.equal( navInstance.state.isSidebarVisible, isSidebarVisible );
    } );
} );
