/* globals describe, it */
import assert   from 'assert';


import { getCurrentRoute } from '/router';


describe( 'getCurrentRoute', () =>
{
    it( 'should return the matched route', () =>
    {
        const route = getCurrentRoute( 'editor/dashboard/stories' );

        assert.equal( route[ 0 ], 'dashboard' );
        assert.equal( route[ 1 ], 'published-stories' );
    } );


    it( 'should return magazine if there\'s no match', () =>
    {
        const route = getCurrentRoute( 'edit/things/stuff' );

        assert.equal( route[ 0 ], 'home' );
    } );


    it( 'should use window.location if nothing is passed to it', () =>
    {
        const route = getCurrentRoute();

        assert.equal( route[ 0 ], 'home' );
    } );
} );
