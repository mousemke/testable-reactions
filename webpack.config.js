
const path                  = require( 'path' );
const webpack               = require( 'webpack' );
const version               = require( './app/version')
const WebpackShellPlugin    = require( 'webpack-shell-plugin' );
const LessPluginCleanCSS    = require( 'less-plugin-clean-css' );
const variables             = require( './variables' );

const PROD      = process.env.PRODUCTION || false;

/* istanbul ignore next */
module.exports = {

    resolve : {
        fallback    : path.join( __dirname, 'src' ),
        alias       : {
            config      : path.join( __dirname, `config/${ PROD ? 'live' : 'local' }.json` ),
        },
    },


    entry   : PROD ? {
        index  : './app/main.jsx'
    } : {
        server      : `webpack-dev-server/client?http://localhost:${variables.DEV_SERVER_PORT}`,
        hot         : 'webpack/hot/only-dev-server',
        index  : './app/main.jsx'
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
                test    : /\.css$/,
                exclude : /node_modules/,
                loader  : 'style!css!'
            },
            {
                test: /\.json$/,
                include: path.join(__dirname),
                loader: 'json',
            },
            {
                test: /\.js$/,
                loaders: PROD ? ['babel'] : ['react-hot', 'babel'],
                include: path.join( __dirname, 'app' )
            },
            {
                test: /\.js|jsx$/,
                loaders: PROD ? ['babel'] : ['react-hot', 'babel'],
                include: path.join( __dirname, 'app' )
            }
        ]
    },

    lessLoader: {
        lessPlugins: [
          new LessPluginCleanCSS( { advanced: true, keepSpecialComments: 0 } )
        ]
    }
};
