/**
 * webpack config - development mode
 * @author: Arie M. Prasetyo (2021)
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
});