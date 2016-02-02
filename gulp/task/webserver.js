var gulp = require('gulp'),
    server = require('gulp-server-livereload'),
    config = require('../config').server;

gulp.task('webserver', function () {
    gulp.src(config.dist)
        .pipe(server({
            host: "0.0.0.0",
            livereload: true,
            directoryListing: true
        }));
});
