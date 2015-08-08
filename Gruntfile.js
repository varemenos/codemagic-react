module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt);

    var configs = require('load-grunt-configs')(grunt, {
        config: {
            src: 'tasks/config/*.js'
        }
    });

    grunt.initConfig(configs);
    grunt.task.loadTasks('./tasks');

    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('build', [
        'copy:index.html',
        'sass:dev',
        'browserify:dev',
        'extract_sourcemap:dev'
    ]);
};
