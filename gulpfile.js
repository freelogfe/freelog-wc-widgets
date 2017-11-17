"use strict";

var gulp = require('gulp');
var inline = require('gulp-inline');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var del = require('del')
var runSequence = require('run-sequence');
var newer = require('gulp-newer');
const minify = require("gulp-babel-minify");
var isBuild = true
var dest = 'dist'
gulp.task('clean', function () {
    return del([dest])
})

gulp.task('pack-html', function () {
    return gulp.src(['!src/lib/**/*', 'src/**/*.html'])
        // .pipe(newer(dest))
        .pipe(inline({
            js: function () {
                return uglify({
                    mangle: isBuild
                });
            },
            // css: [autoprefixer({browsers: ['last 2 versions']})],
            disabledTypes: ['img'], // Only inline css files
            ignore: []
        }))
        .pipe(htmlmin({
            collapseWhitespace: isBuild,
            minifyJS: isBuild,
            minifyCSS: isBuild
        }))
        .pipe(gulp.dest(dest));
});

gulp.task('build', function (done) {
    runSequence('clean',
        ['pack-html'],
        done)
})


gulp.task('default', ['build'])


gulp.task('watch', function () {
    isBuild = false
    gulp.watch(['./src/**/*'], ['build'])
})