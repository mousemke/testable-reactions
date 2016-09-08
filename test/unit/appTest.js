/* globals describe, it */
import assert           from 'assert';
import React            from 'react';
import App              from '/App';

import sinon            from 'sinon';
import { shallow }      from 'enzyme';

const app     = shallow( <App /> );

describe( 'The App component', () =>
{
    it( 'should show the initial test div', () =>
    {
        assert.equal( app.is( '.js-test-div' ), true );
        assert.equal( app.text(), 'Hello Patata!!' );
    } );
} );



describe( 'onRouteChange', () =>
{
    it( 'should set the route state to the current route', () =>
    {
        const appInstance = app.instance();

        sinon.stub( appInstance, 'getCurrentRoute',  () =>
        {
            return 'test';
        } );

        appInstance.onRouteChange();
        appInstance.getCurrentRoute.restore();


        const state = app.state();

        assert.equal( state.route, 'test' );
    } );
} );
