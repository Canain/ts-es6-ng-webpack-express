const webpack = require('webpack');

module.exports = {
	entry: './src/ts/browser/main.ts',
	output: {
		filename: './www/bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.ts$/,
				loader: 'ts'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
			}
		]
	},
	node: {
		fs: 'empty'
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	}
};