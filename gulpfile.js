var gulp = require('gulp'),
    gulpsync   = require('gulp-sync')(gulp),
    requireDir = require('require-dir');

requireDir('./gulp/task', {recurse: true});

gulp.task('package', ['scripts', 'jade']);
gulp.task('default', gulpsync.sync(['clean', 'package']));

gulp.task('run', gulpsync.sync(['default', 'watch', 'webserver']));
