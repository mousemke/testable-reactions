
import assert           from 'assert';
import React            from 'react';
import Sidebar          from '/components/navigation/Sidebar';


import enzyme, { shallow, mount, render }   from 'enzyme';


let sidebar = shallow( <Sidebar route={ [ 'magazine' ] } isSidebarVisible={ true }/> );


describe( 'The Sidebar component', () =>
{
    it( 'should have the correct class when hidden and visible', () =>
    {
        let sidebarHidden = shallow( <Sidebar route={ [ 'magazine' ] } isSidebarVisible={ false }/> );
        assert.equal( sidebarHidden.is( '.Sidebar.visible' ), false );

        assert.equal( sidebar.is( '.Sidebar.visible' ), true );
    } );


    it( 'should contain the correct number of menu items', () =>
    {
        let sidebarMounted = mount( <Sidebar route={ [ 'magazine' ] } isSidebarVisible={ false }/> );
        assert.equal( sidebarMounted.find( '.js-menu-item' ).length, 5 );
    } );
} );
