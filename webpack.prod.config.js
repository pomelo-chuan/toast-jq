const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './toast/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'toast.min.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new webpack.optimize.UglifyJsPlugin(),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
