
import assert   from 'assert';
import sinon    from 'sinon';

import { loadCss, loadExternalResource, loadScript } from '/util/external';


describe( 'loadCss', () =>
{
    it( 'should return a link tag with the appropriate url and attributes', () =>
    {
        let linkTag = loadCss( 'http://doge.styla.com' ).then( el =>
        {
           assert.equal( el.nodeType, 1 );
           assert.equal( el.tagName, 'link' );
           assert.equal( el.type, 'text/css' );
           assert.equal( el.rel, 'stylesheet' );
           assert.equal( el.parentNode, document.head );
        } );
    } );
} );


describe( 'loadExternalResource', () =>
{
    it( 'should return a tag with the appropriate url and attributes', () =>
    {
        let tag = loadExternalResource( 'http://doge.styla.com', 'div' ).then( el =>
        {
           assert.equal( el.nodeType, 1 );
           assert.equal( el.tagName, 'div' );
           assert.equal( typeof el.type, 'undefined' );
           assert.equal( typeof el.rel, 'undefined' );
           assert.equal( el.parentNode, document.head );
        } );
    } );
} );



describe( 'loadScript', () =>
{
    it( 'should return a script tag with the appropriate url and attributes', () =>
    {
        let scriptTag = loadScript( 'http://doge.styla.com' ).then( el =>
        {
           assert.equal( el.nodeType, 1 );
           assert.equal( el.tagName, 'script' );
           assert.equal( el.type, 'text/javascript' );
           assert.equal( typeof el.rel, 'undefined' );
           assert.equal( el.parentNode, document.head );
        } );
    } );
} );
