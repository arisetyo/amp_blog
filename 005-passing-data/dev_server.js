/**
 * Hot-loading server for development
 * @author: Arie M. Prasetyo (2021)
 */

const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.dev');

/**
 * Webpack dev server implementation to allow for React Hot Loader usage.
 *
 * Sourced from https://github.com/gaearon/react-hot-boilerplate
 */
new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	historyApiFallback: true,
	headers: {'Access-Control-Allow-Origin': '*'}
}).listen(config.devServer.port, config.devServer.host, err => {
	if (err) {
		//noinspection Eslint
		console.log(err); // eslint-disable-line
		process.exit(1);
	}
	console.log(`Listening at http://${config.devServer.host}:${config.devServer.port}`); // eslint-disable-line
});