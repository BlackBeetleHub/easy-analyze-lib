'use strict';

module.exports = {
    entry: ['./src/clear_word', './src/dictionary'],

    output: {
        path: __dirname + "/dist",
        filename: "ggg.js",
        library: "home"
    }
};