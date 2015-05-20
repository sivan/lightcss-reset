'use strict';
var combiner = require('stream-combiner2');
var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var dir = {
    dest: 'css/',
    src: 'scss/'
};

gulp.task('sass', function() {
    var combined = combiner.obj([
        gulp.src([dir.src + '*.scss']),
        sass({
            outputStyle: 'compressed'
        }),
        rename('reset.min.css'),
        gulp.dest(dir.dest)
    ]);
    combined.on('error', function() {
        console.log('\u0007');
    });
    return combined;
});

gulp.task('default', ['sass']);
