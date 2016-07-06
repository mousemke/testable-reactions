
import assert           from 'assert';
import App              from '/App';
import _package         from '../../package.json';


describe( 'The Back Office', () =>
{
    it( 'should have the same version as the package.json', () =>
    {
        assert.equal( App.version, _package.version );
    } );
} );