/* globals describe, it */
import assert           from 'assert';
import App              from '/components/App.jsx';
import _package         from '../../package.json';


describe( 'The app', () =>
{
    it( 'should have the same version as the package.json', () =>
    {
        assert.equal( App.version, _package.version );
    } );
} );
