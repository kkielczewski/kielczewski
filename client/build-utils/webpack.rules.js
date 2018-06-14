const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = [
  {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components|dist\/)/,
    loader: 'babel-loader'
  },
  {
    test: /\.css$/,
    exclude: ['node_modules'],
    loaders: ['style-loader', 'css-loader?importLoaders=1']
  },
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: 'css-loader?sourceMap&minimize!postcss-loader!sass-loader?outputStyle=expanded'
    }),
    exclude: /(node_modules|bower_components)/,
    include: [
      path.resolve(__dirname, '../source/styles')
    ]
  },
  {
    test: /\.(woff|woff2)$/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.svg$/,
    loader: 'svgr/webpack'
  },
  {
    test: /\.(jpe?g|png|gif|pdf|ico)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[path][name]-[hash:8].[ext]'
        }
      },
      {
        loader: 'image-webpack-loader',
        options: {
          bypassOnDebug: true
        }
      }
    ]
  }
];
