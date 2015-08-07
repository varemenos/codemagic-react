module.exports = function (grunt) {
    grunt.initConfig({
        extract_sourcemap: {
            dev: {
                files: {
                    'dist/': [
                        'dist/main.js'
                    ]
                }
            }
        },
        browserify: {
            dev: {
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
    grunt.loadNpmTasks('grunt-extract-sourcemap');

    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', [
        'copy:index.html',
        'sass:dev',
        'browserify:dev',
        'extract_sourcemap:dev'
    ]);
};
