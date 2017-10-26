'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var webpack = require('webpack');


gulp.task('browser:build', function () {
    return gulp.src('src/browser.js')
        .pipe(plugins.webpack({
            output: {library: 'StellarBase'},
            module: {
                loaders: [
                    {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
                ]
            }
        }))
        .pipe(plugins.rename('ggg.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', function() {
    return gulp.src(["dist/ggg.js", "test/unit/**/*.js"])
        .pipe(plugins.mocha({
            reporter: ['spec']
        }));
});

gulp.task('lint:src', function() {
    return gulp.src(['src/**/*.js'])
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.jshint.reporter('warning'));
});

gulp.task('node:build', function() {
    return gulp.src('src/**/*.js')
        .pipe(plugins.babel())
        .pipe(gulp.dest('lib'));
});

gulp.task('build', ['lint:src', 'node:build']);