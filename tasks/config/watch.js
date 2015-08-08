module.exports = {
    options: {
        livereload: 35729
    },
    js: {
        files: [
            'app/**/*.js*'
        ],
        tasks: [
            'browserify',
            'extract_sourcemap:dev'
        ]
    },
    html: {
        files: [
            'app/index.html'
        ],
        tasks: [
            'browserify'
        ]
    },
    sass: {
        files: [
            'app/scss/**/*.scss'
        ],
        tasks: [
            'sass'
        ]
    }
};
