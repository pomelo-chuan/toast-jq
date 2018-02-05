const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './toast/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'toast.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ]
};
