const path = require('path');
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const variables = require( './variables' );

const PROD = process.env.PRODUCTION || false;

/* istanbul ignore next */
module.exports = {
    entry   : PROD ? {
        index : './src/main.jsx'
    } : {
        index : './src/main.jsx'
    },

    output  : {
        path : path.join( __dirname, 'dist' ),
        filename : 'bundle.js',
        publicPath : '/'
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: './dist',
        hot: true
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        // new webpack.NamedModulesPlugin(),
    ],

    module: {
        rules: [
            {
                test    : /\.css$/,
                exclude : /node_modules/,
                use : [
                    'style-loader',
                    'css-loader'
                ]
            },

            {
                test: /\.json$/,
                include: path.join(__dirname),
                loader: 'json-loader',
            },
             {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.js(x)?$/,
                use: PROD ? ['babel-loader'] : ['babel-loader'],
                // use: PROD ? ['babel'] : ['react-hot', 'babel'],
                include: path.join( __dirname, 'src' )
            }
        ]
    }
};
