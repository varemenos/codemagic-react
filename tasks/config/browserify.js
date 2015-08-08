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
            'dist/app.js': [
                'app/app.jsx'
            ]
        }
    }
};
