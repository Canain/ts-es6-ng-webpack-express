/// <reference path="typings/main.d.ts" />
const webpack = require('webpack');

module.exports = {
	entry: './src/ts/browser/main.ts',
	output: {
		filename: './pub/bundle.js',
		devtool: 'source-map',
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
		},
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'babel?presets[]=es2015!ts'
			}
		]
	}
};