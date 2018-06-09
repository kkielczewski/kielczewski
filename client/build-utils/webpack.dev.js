const path = require('path');
const rules = require('./webpack.rules');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8080';

module.exports = {
  entry: {
    app:
      [
        'babel-polyfill',
        'react-hot-loader/patch',
        './source/application.jsx'
      ]
  },
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].chunk.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      configuration: path.resolve(__dirname, '../build-utils/'),
      styles: path.resolve(__dirname, '../source/styles/'),
      static: path.resolve(__dirname, '../static'),
      actions: path.resolve(__dirname, '../source/app/actions'),
      components: path.resolve(__dirname, '../source/app/components'),
      containers: path.resolve(__dirname, '../source/app/containers'),
      decorators: path.resolve(__dirname, '../source/app/decorators'),
      hoc: path.resolve(__dirname, '../source/app/hoc'),
      reducers: path.resolve(__dirname, '../source/app/reducers'),
      screens: path.resolve(__dirname, '../source/app/screens'),
      services: path.resolve(__dirname, '../source/app/services')
    }
  },
  module: {
    rules
  },
  performance: {
    hints: 'warning',
    maxAssetSize: 450000,
    maxEntrypointSize: 8500000,
    assetFilter: assetFilename => (assetFilename.endsWith('.css') || assetFilename.endsWith('.js'))
  },
  optimization: {
    nodeEnv: 'development',
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          minChunks: 2
        },
        default: {
          minChunks: 2,
          reuseExistingChunk: true
        }
      }
    }
  },
  target: 'web',
  devServer: {
    contentBase: './dist',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      analyzerHost: HOST
    }),
    new ExtractTextPlugin({
      disable: process.env.NODE_ENV === 'development',
      filename: 'css/[name].[hash].css',
      allChunks: true
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new DashboardPlugin(),
    new CopyWebpackPlugin([
      { from: './static/robots.txt', to: '' }
    ], {
      copyUnmodified: false
    }),
    new HtmlWebpackPlugin({
      template: './source/index.hbs',
      favicon: './static/images/favicon.ico',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true
      }
    })
    /* new HtmlWebpackIncludeAssetsPlugin({
            assets: [
                'js/file.js',
            ],
            append: true,
        }), */
  ]
};
