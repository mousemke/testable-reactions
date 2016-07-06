
import assert   from 'assert';
import sinon    from 'sinon';


import { api, fetchMe, getXhrOptions, login, querystring } from '/util/api';


describe( 'api', () =>
{
    it( 'should contain all possible methods as functions', () =>
    {
        assert.equal( typeof api.get,       'function' );
        assert.equal( typeof api.post,      'function' );
        assert.equal( typeof api.put,       'function' );
        assert.equal( typeof api.patch,     'function' );
        assert.equal( typeof api.delete,    'function' );
    } );
} );



describe( 'fetchMe', () =>
{
    it( 'should retrieve the `me` object', () =>
    {
        fetchMe().then( me =>
        { 
            assert.equal( typeof me.id, 'string' );
        } );
    } );
} );



describe( 'getXhrOptions', () =>
{
    it( 'should correctly add & or ? for params', () =>
    {
        let options = getXhrOptions( 'POST', 'index.js' );
        assert.notEqual( options.url.indexOf( '?' ), -1 );

        options     = getXhrOptions( 'POST', 'index.js?moon=yes' );
        assert.notEqual( options.url.indexOf( '&' ), -1 );
    } );


    it( 'should parse the body object into a string', () =>
    {
        let options = getXhrOptions( 'POST', 'index.js', 
                                        { body: { doge: 'moon' } } );

        assert.equal( typeof options.body, 'string' );
        assert.equal( options.body, 'doge=moon' );
    } );


    it( 'should add json to the object if necessary', () =>
    {
        let options = getXhrOptions( 'POST', 'index.js', 
                                        { json: '{"doge":"moon"}' } );

        assert.equal( typeof options.json, 'string' );
        assert.equal( options.json, '{"doge":"moon"}' );
    } );


    it( 'should properly apply the options you send it', () =>
    {
        let options = getXhrOptions( 'POST', 'index.js', 
                                        { 
                                            body :      { doge: 'moon' },
                                            json :      '{"doge":"moon"}', 
                                            headers :   { doge: 'moon' },
                                            query :     { domain: 'moon' }
                                        } );

        assert.equal( options.method, 'POST' );
        assert.equal( options.body, 'doge=moon' );
        assert.equal( options.headers[ 'Content-Type' ], 'application/x-www-form-urlencoded' );
        assert.notEqual( options.url.indexOf( 'index.js' ), -1 );
        assert.equal( options.withCredentials, true );
        assert.equal( options.responseType, 'json' );
        assert.equal( options.json, '{"doge":"moon"}' );
    } );
} );



describe( 'login', () =>
{
    it( 'should retrieve the `me` object', () =>
    {
        login().then( me =>
        { 
            assert.equal( typeof me.id, 'string' );
        } );
    } );
} );



describe( 'querystring', () =>
{
    it( 'should parse an object to url standards', () =>
    {
        let query = {
            one: 1,
            two: '2',
            three: 3      
        };

        let str = querystring( query );

        assert.equal( str, 'one=1&two=2&three=3' );
    } );


    it( 'should be able to parse arrays', () =>
    {
        let query = {
            one: 1,
            two: [ '2', 3 ],
            three: [ 4 ]     
        };

        let str = querystring( query );

        assert.equal( str, 'one=1&two%5B%5D=2&two%5B%5D=3&three%5B%5D=4' );
    } );
} );
