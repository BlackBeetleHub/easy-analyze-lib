'use strict';

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: [
        './src/word.js',
        './src/dictionary.js',
        './src/processing/processing_modules/ProcessModule.js',
        './src/processing/processing_modules/ClearPunctuatio.js'
    ],
    output: {
        path: __dirname + "/dist",
        library: "home",
        filename: "ggg.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};