const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js?[hash]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true // Manual typing route in the URL bar connected to react-router.
  },
  module: {
    rules: [
      // Images
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]?[hash]',
            outputPath: 'assets/images/'
          }
        }
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[ext]?[hash]',
            limit: 10000,
            mimetype: 'application/fontwoff',
            outputPath: 'assets/fonts/'
          }
        }
      },
      // Babel
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // ESLint
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'eslint-loader'
        }
      },
      // HTML
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};
