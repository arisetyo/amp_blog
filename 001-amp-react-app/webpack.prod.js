/**
 * webpack config - production mode
 * @author: Arie M. Prasetyo (2021)
 */

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});