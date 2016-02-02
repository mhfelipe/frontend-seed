var gulp = require('gulp'),
    config_jade = require('../config').jade,
    config_scripts = require('../config').scripts,
    config = require('../config').server;

gulp.task('watch', function () {

    gulp.watch(config_jade.src, ['jade']);

    gulp.watch(config_scripts.src, ['scripts']);

    gulp.watch([
        config.watch
    ]);
});
