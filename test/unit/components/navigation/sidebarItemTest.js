
import assert           from 'assert';
import React            from 'react';
import SidebarItem      from '/components/navigation/SidebarItem';


import enzyme, { shallow, mount, render }   from 'enzyme';


let sidebarItem = shallow( <SidebarItem route="magazine" currentRoute="magazine" href="#home" l10n="Your Magazine"/> );


describe( 'The SidebarItem component', () =>
{
    it( 'should have the active class when its route is the current route', () =>
    {
        assert.equal( sidebarItem.is( '.js-menu-item.active' ), true );
    } );

    it( 'should not have the active class when the route is not current route', () =>
    {
        let sidebarItem = shallow( <SidebarItem route="magazine" currentRoute="editor" href="#home" l10n="Your Magazine"/> );
        assert.equal( sidebarItem.is( '.js-menu-item.active' ), false );
    } );
} );
