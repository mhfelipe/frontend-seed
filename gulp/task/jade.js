var gulp = require('gulp'),
    changed = require('gulp-changed'),
    jade = require('gulp-jade'),
    prettify = require('gulp-html-prettify'),
    handleErrors = require('../util/handleErrors'),
    config = require('../config').jade;

gulp.task('jade', function () {
    return gulp.src(config.src)
        .pipe(changed(config.dist, {extension: '.html'}))
        .pipe(jade())
        .on("error", handleErrors)
        .pipe(prettify({
            indent_char: '\t',
            indent_size: 1,
            unformatted: ['a', 'sub', 'sup', 'b', 'i', 'u']
        }))
        // .pipe(htmlify({
        //     customPrefixes: ['ui-']
        // }))
        // .pipe(w3cjs( W3C_OPTIONS ))
        .pipe(gulp.dest(config.dist));
});
