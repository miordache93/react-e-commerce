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
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                  'style-loader',
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                    },
                  },
                ],
              },
        ]
    }
};

module.exports = merge(baseConfig, config);