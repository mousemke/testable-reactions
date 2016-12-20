/* globals describe, it */
import assert           from 'assert';
import React            from 'react';
import App              from '/components/App.jsx';

import sinon            from 'sinon';
import { shallow, mount }      from 'enzyme';


describe( 'The App component', () =>
{
    it( 'should show the initial div', () =>
    {
        const app     = shallow( <App /> );

        assert.equal( app.is( '.AppWrapper' ), true );
        assert.equal( app.text(), 'This app seems to be working!' );
    } );


    it( 'should mount it\'s children', () =>
    {
        sinon.stub( React, 'cloneElement', () =>
        {
        } );

        const app           = mount( <App children={ [ '' ] }/> );

        assert.equal( React.cloneElement.callCount, 1 );
        React.cloneElement.restore();
    } );
} );
