'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var webpack = require('webpack-stream');


gulp.task('default', function () {
    return gulp.src('src/**/*.js')
        .pipe(plugins.webpack({
            output: {library: 'StellarBase'},
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(plugins.rename('easy.js'))
        .pipe(gulp.dest('dist'));
})

