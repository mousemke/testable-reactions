
import assert           from 'assert';
import React            from 'react';
import ReactDOM         from 'react-dom';
import ReactTestUtils   from 'react-addons-test-utils';
import App              from '/App';

import sinon                                from 'sinon';
import enzyme, { shallow, mount, render }   from 'enzyme';

let app     = shallow( <App /> );

describe( 'The App component', () =>
{
    it( 'should show the initial test div', () =>
    {   
        assert.equal( app.is( '.js-test-div' ), true );
        assert.equal( app.text(), 'probably delete me' );
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
