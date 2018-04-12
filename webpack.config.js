const path = require('path');
const webpack = require( 'webpack' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const FlexbugsFixes = require('postcss-flexbugs-fixes');

const variables = require( './variables' );

const PROD = process.env.PRODUCTION || false;

const postcssLoaderConfig = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    plugins: () => [
      FlexbugsFixes,
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
};

/* istanbul ignore next */
module.exports = {
  entry   : {
    index : [
      './src/polyfills',
      './src/main.jsx'
    ]
  },

  performance: {
    maxAssetSize: 100000
  },

  output  : {
    path : path.join( __dirname, 'dist' ),
    filename: '[name].[hash:22].js',
    chunkFilename: '[name].[hash:22].js',
    publicPath : '/'
  },

  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: PROD ? [
    new ExtractTextPlugin({
      filename: '[name].css'
    }),
    new HtmlWebpackPlugin({
      title: 'Where is the fisch?'
    }),
  ] : [
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Where is the fisch?',
    })
  ],

  optimization: PROD ? {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  } : {
    namedModules: true,
  },

  module: {
    rules : [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.css$/,
            use: PROD ?
              ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      importLoaders: 1,
                      modules: true,
                      minimize: true,
                      sourceMap: true,
                    }
                  },
                  postcssLoaderConfig,
                ]
              }) :
              [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                  },
                },
                postcssLoaderConfig,
              ],
          },
        ]
      }
    ]
  }
};
