
import assert   from 'assert';
import sinon    from 'sinon';


import { getCurrentRoute } from '/router';


describe( 'getCurrentRoute', () =>
{
    it( 'should return the matched route', () =>
    {
        let route = getCurrentRoute( 'editor/dashboard/stories' );

        assert.equal( route[0], 'dashboard' );
        assert.equal( route[1], 'published-stories' );
    } );


    it( 'should return magazine if there\'s no match', () =>
    {
        let route = getCurrentRoute( 'edit/things/stuff' );

        assert.equal( route[0], 'magazine' );
    } );
} );
