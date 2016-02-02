var gulp = require('gulp'),
    rimraf = require('gulp-rimraf'),
    config = require('../config').clean;

gulp.task('clean', function () {
    return gulp.src(config.dist, {read: false}) // much faster
        .pipe(rimraf({force: true}));
});
