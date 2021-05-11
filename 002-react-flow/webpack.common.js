/**
 * webpack config
 * @author: Arie M. Prasetyo (2021)
 */

const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
 
const port = 8000;
const host = 'localhost';
 
module.exports = {
  bail: true,
  entry: [
    'webpack-dev-server/client?http://' + host + ':' + port,
    'webpack/hot/only-dev-server',
    __dirname + '/src/index.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // Transform JS files from ES2015/JSX to ES5.
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        // CSS imports
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]'
              },
              url: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer"
                  ],
                ],
              },
            },
          }
        ],
      },
      {
        // load image files
        test: /\.(png|jpg|svg)$/,
        use: ['url-loader']
      }
    ]
  },
  optimization: {
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/static/index.html',
      filename: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: __dirname + '/static/index.css', to: __dirname + '/build/index.css'}
      ]
    })
  ],
  devServer: {
    host,
    port,
    progress: true,
    colors: true,
    contentBase: __dirname + '/src',
    historyApiFallback: true
  }
};