
const routes = [
    // [ /^editor\/dashboard\/stories/   , 'dashboard' , 'published-stories' ], // example route
];


/**
 * ## getCurrentRoute
 *
 * retrieves the current hash and matches it to a route
 * 
 * @param {String} path manual override for the hash.  mostly for testing
 * 
 * @return _Array_ route
 */
export function getCurrentRoute( path )
{
    path = path || window.location.hash.substring(1);

    for ( let route of routes )
    {
        if ( route[0].test( path ) )
        {
            return route.slice(1);
        }
    }

    return [ '' ];
}
