
const path                  = require( 'path' );
const webpack               = require( 'webpack' );
const version               = require( './src/version')
const WebpackShellPlugin    = require( 'webpack-shell-plugin' );
const LessPluginCleanCSS    = require( 'less-plugin-clean-css' );
const variables             = require( './variables' );

const PROD      = process.env.PRODUCTION || false;

/* istanbul ignore next */
module.exports = {

    resolve : {
        fallback    : path.join(__dirname, 'src'),
        alias       : {
            config      : path.join(__dirname, `config/${ PROD ? 'live' : 'local' }.json`),
        },
    },


    entry   : PROD ? {
        index  : './src/index'
    } : {
        server      : `webpack-dev-server/client?http://localhost:${variables.DEV_SERVER_PORT}`,
        hot         : 'webpack/hot/only-dev-server',
        index  : './src/index'
    },


    output  : {
        path        : path.join( __dirname, 'dist' ),
        filename    : 'tests.js',
        publicPath  : '/'
    },


    node    : {
        fs          : 'empty',
        console     : false,
        global      : true,
        process     : true,
        Buffer      : false,
        setImmediate: false
    },


    plugins : PROD ? [
        new webpack.optimize.UglifyJsPlugin( {
            minimize    : true,
            compress    : {
                warnings    : false,
                drop_console: true
            }
        } ),
        new webpack.optimize.CommonsChunkPlugin( 'index', `index.${version}.js` ),
        new WebpackShellPlugin({
            onBuildEnd: [`sed -i -- 's/index\.js/index.${version}.js/' dist/index.html`]
        })
    ] : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin( 'index', 'index.js' )
    ],


    module  : {
        loaders : [
            {
                test: /\.json$/,
                include: path.join(__dirname),
                loader: 'json',
            },
            {
                test: /\.js$/,
                loaders: PROD ? ['babel'] : ['react-hot', 'babel'],
                include: path.join( __dirname, 'src' )
            },
            {
                test    : /\.less$/,
                exclude : /node_modules/,
                loader  : 'style!css!less!'
            }
        ]
    },

    lessLoader: {
        lessPlugins: [
          new LessPluginCleanCSS( { advanced: true, keepSpecialComments: 0 } )
        ]
    }
};
