const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'build'),
        filename : 'bundle.js'
    },
    devtool: 'inline-source-map',
    module:{
        rules : [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true
                }
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/
            }
        ]
    },
    stats: {
        colors: true
    },
};
