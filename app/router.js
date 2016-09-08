/* globals window */
const routes = [
    [ /^editor\/dashboard\/stories/, 'dashboard', 'published-stories' ]
];


/**
 * ## getCurrentRoute
 *
 * retrieves the current hash and matches it to a route
 *
 * @param {String} path manual override for the hash.  mostly for testing
 *
 * @return {Array} route
 */
export function getCurrentRoute( path )
{
    path = path || window.location.hash.substring( 1 );

    for ( const route of routes )
    {
        if ( route[ 0 ].test( path ) )
        {
            return route.slice( 1 );
        }
    }

    return [ 'home' ];
}
