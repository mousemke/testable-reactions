
import assert   from 'assert';
import sinon    from 'sinon';

import l10n     from '/util/l10n';


describe( 'l10n', () =>
{
    it( 'should translate something from the translate list', () =>
    {
        assert.equal( l10n( 'Hello, world' ), 'Hallo, Welt' );
    } );


    it( 'should swap from supplied options', () =>
    {
        let translation = l10n( 'Hello, {0} {1}', 'red', 'mars' );
        assert.equal( translation, 'Hello, red mars' );
    } );


    it( 'should ignore unsupplied replacements', () =>
    {
        let translation = l10n( 'Hello, {0} {1}{2}', 'red', 'mars' );
        assert.equal( translation, 'Hello, red mars' );
    } );
} );
