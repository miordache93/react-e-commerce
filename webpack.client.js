const path = require('path');
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');


const config = {
    // root file for server app
    entry: './src/client/client.js',

    // Tell webpack where to put the output generated file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
};

module.exports = merge(baseConfig, config);