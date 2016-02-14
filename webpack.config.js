/// <reference path="typings/main.d.ts" />
var webpack = require('webpack');

module.exports = {
	entry: 'src/ts/browser/main.ts',
	output: {
		filename: 'pub/bundle.js',
		devtool: 'source-map',
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
		},
		plugins: [
			new webpack.optimize.UglifyJsPlugin()
		],
		module: {
			loaders: [
				{
					test: /\.ts$/,
					loader: 'ts'
				}
			]
		}
	}
};