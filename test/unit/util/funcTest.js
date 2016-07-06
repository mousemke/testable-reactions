
import assert   from 'assert';
import sinon    from 'sinon';


import { curry } from '/util/func';


let setVars = ( a, b, c, d ) =>
{
    return { a, b, c, d };
};


describe( 'curry', () =>
{
    it( 'should apply variables', () =>
    {
        let curryFunc = curry( setVars, 1, 2 );

        assert.deepEqual( curryFunc( 3, [ 1, 2, 3 ] ), { a: 1, b: 2, c: 3, d: [ 1, 2, 3 ] } );
    } );
} );
