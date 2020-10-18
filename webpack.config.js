const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/i,
				use: [ 'style-loader', 'css-loader' ],
			},
			{
				test: /\.(png|jpe?g)$/i,
				loader: 'file-loader',
				options: {
					outputPath: 'assets/img',
					name: '[name].[ext]',
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html',
			favicon: './public/favicon.ico',
		}),
	],
};
