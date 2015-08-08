module.exports = {
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
};
