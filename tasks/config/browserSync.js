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
            tunnel: 'codemagic',
            open: false
        }
    }
};
