"use strict";

var gulp = require('gulp');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
var del = require('del')
var cleanCSS = require('gulp-clean-css');

gulp.task('clean', function () {
    return del(['dist'])
})

gulp.task('pack-html', ['clean'], function () {
    return gulp.src(['./src/widgets/**/*.html'])
        .pipe(inline({
            js: function () {
                return uglify({
                    mangle: true
                });
            },
            // css: [autoprefixer({browsers: ['last 2 versions']})],
            disabledTypes: ['img'], // Only inline css files
            ignore: []
        }))
        .pipe(htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['clean', 'pack-html'])


gulp.task('watch', function () {
    gulp.watch(['./src/**/*'], 'pack-html')
})