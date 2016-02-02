var dist = './dist/',
    src = './src/main/';

module.exports = {
    clean: {
        dist: dist
    },
    jade: {
        src: [
            src + 'jade/**/*.jade',
            '!' + src + 'jade/partials/**/*.jade'
        ],
        dist: dist
    },
    scripts: {
        src: [
            src + 'js/app.init.js',
            src + 'js/modules/**/*.js',
            src + 'js/modules/controllers/*.js',
            src + 'js/modules/directives/*.js',
            src + 'js/modules/services/*.js',
            src + 'js/modules/filters/*.js'
        ],
        filename: 'app.js',
        dist: dist
    },
    server: {
        dist: dist,
        watch: src + '**'
    }
};