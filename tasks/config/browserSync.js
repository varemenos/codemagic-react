module.exports = {
    dev: {
        bsFiles: {
            src: [
                'dist/**/*'
            ]
        },
        options: {
            watchTask: true,
            server: './dist',
            tunnel: true,
            open: false,
            logConnections: true
        }
    }
};
