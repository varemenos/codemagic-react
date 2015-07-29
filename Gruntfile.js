module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        debug: true
                    },
                    transform: [
                        ['babelify', {
                            loose: 'all'
                        }]
                    ]
                },
                files: {
                    'dist/main.js': [
                        'app/main.jsx'
                    ]
                }
            }
        },
        copy: {
            'index.html': {
                files: [
                    {
                        cwd: './app/',
                        expand: true,
                        src: './index.html',
                        dest: './dist/'
                    }
                ]
            }
        },
        watch: {
            options: {
                'livereload': 35729
            },
            js: {
                files: [
                    'app/**/*.js*'
                ],
                tasks: [
                    'browserify'
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
        },
        sass: {
            dev: {
                files: {
                    'dist/css/main.css': [
                        'app/scss/main.scss'
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', [
        'copy:index.html',
        'sass',
        'browserify'
    ]);
};
