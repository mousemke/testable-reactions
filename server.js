/* global require, console */
const webpack           = require( 'webpack' );
const WebpackDevServer  = require( 'webpack-dev-server' );
const config            = require( './webpack.config' );
const variables         = require( './variables' );
const listen            = variables.DEV_SERVER_HOST;
const port              = variables.DEV_SERVER_PORT;

new WebpackDevServer( webpack( config ),
    {
        publicPath          : config.output.publicPath,
        hot                 : true,
        historyApiFallback  : true


    } ).listen( port, listen, err =>
    {
        if ( err )
        {
            return console.error( err );
        }

        console.warn( `Listening at http://localhost:${port}/` );
    }
);
