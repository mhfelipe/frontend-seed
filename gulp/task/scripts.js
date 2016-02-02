var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    concat = require('gulp-concat'),
    handleErrors = require('../util/handleErrors'),
    browserify = require('gulp-browserify'),
    config = require('../config').scripts;


gulp.task('scripts', function () {
    return gulp.src(config.src)
        .pipe(concat(config.filename))
        .pipe(ngAnnotate())
        .on("error", handleErrors)
        .pipe(uglify({preserveComments: 'some'}))
        .on("error", handleErrors)
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest(config.dist));
});
