'use strict';

module.exports = {
    context: __dirname,
    devtool: "source-map",
    entry: ['./src/word.js', './src/dictionary.js'],
    output: {
        path: __dirname + "/dist",
        filename: "ggg.js",
        library: "home"
    }
};