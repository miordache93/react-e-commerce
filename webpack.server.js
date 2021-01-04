const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // building a bundle for nodeJS
    target: 'node',

    // root file for server app
    entry: './src/index.js',

    // Tell webpack where to put the output generated file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [
        webpackNodeExternals()
    ]
};

module.exports = merge(baseConfig, config);