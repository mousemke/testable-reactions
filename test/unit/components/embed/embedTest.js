
import assert           from 'assert';
import React            from 'react';
import ReactDOM         from 'react-dom';
import ReactTestUtils   from 'react-addons-test-utils';
import Embed            from '/components/embed/Embed';
import Navigation       from '/components/navigation/Navigation';

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';


let embed   = shallow( <Embed magazine="test"/> );


describe( 'The Embed component', () =>
{
    it( 'should contain the embed target', () =>
    {
        assert.equal( embed.find( '#stylaMagazine' ).length, 1 );
    } );
} );



describe( 'componentDidMount', () =>
{
    let testMessage     = 'checkLogin-test';
    let embedInstance   = embed.instance();

    sinon.stub( embedInstance, 'loadScript', _r => _r );
    sinon.stub( embedInstance, 'loadCss', _r => _r );
    embedInstance.componentDidMount();

    it( 'should run loadCss once', () =>
    {
        assert.equal( embedInstance.loadCss.callCount, 1 );
        embedInstance.loadCss.restore();
    } );


    it( 'should run loadScript once', () =>
    {
        assert.equal( embedInstance.loadScript.callCount, 1 );
        embedInstance.loadScript.restore();
    } );
} );
