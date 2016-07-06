
const webpack           = require( 'webpack' );
const WebpackDevServer  = require( 'webpack-dev-server' );
const config            = require( './webpack.config' );
const variables         = require( './variables' );
const port              = variables.DEV_SERVER_PORT;

new WebpackDevServer( webpack( config ), 
{
    publicPath          : config.output.publicPath,
    hot                 : true,
    historyApiFallback  : true

} ).listen( port, 'localhost', function( err, result ) 
{
        if ( err ) 
        {
            return console.log( err );
        }

        console.log( `Listening at http://localhost:${port}/` );
} );