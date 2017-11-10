const path = require('path');
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');

const variables = require( './variables' );

const PROD = process.env.PRODUCTION || false;

/* istanbul ignore next */
module.exports = {
  entry   : {
    index : [
      './src/polyfills',
      './src/main.jsx'
    ]
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

  plugins: PROD ? [
    new CleanWebpackPlugin(['dist']),
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      title: 'Where is the fisch?'
    }),
  ] : [
    new CleanWebpackPlugin(['dist']),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin('./node_modules/'),
    new HtmlWebpackPlugin({
      title: 'Where is the fisch?'
    }),
    new webpack.NamedModulesPlugin(),
  ],

  module: {
    rules : [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            loader: require.resolve('babel-loader'),
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: PROD ? {
                  importLoaders: 1,
                  modules: true,
                  minimize: true,
                  sourceMap: true,
                 } : {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    autoprefixer({
                      browsers: [
                        '>1%',
                        'last 4 versions',
                        'Firefox ESR',
                        'not ie < 9',
                      ],
                      flexbox: 'no-2009',
                    }),
                  ],
                },
              },
            ],
          },
        ]
      }
    ]
  }
};
