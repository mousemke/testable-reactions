/* globals describe, it */
import assert           from 'assert';
import React            from 'react';
import App              from '/components/App.jsx';

// import sinon            from 'sinon';
import { shallow }      from 'enzyme';


describe( 'The App component', () =>
{
    it( 'should show the initial test div', () =>
    {
        const app     = shallow( <App /> );

        assert.equal( app.is( '.AppWrapper' ), true );
        assert.equal( app.text(), 'This app seems to be working!<Player />' );
    } );


    // this is left in as an example of sinon
    //
    // it( 'should run componentDidMount', () =>
    // {
    //     sinon.stub( App.prototype, 'revealComponent', () =>
    //     {
    //         console.log( 'test!' );
    //     } );

    //     const app           = shallow( <App /> );
    //     const appInstance   = app.instance();

    //     assert.equal( appInstance.revealComponent.callCount, 1 );
    //     App.prototype.revealComponent.retore();
    // } );
} );
