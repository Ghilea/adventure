const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@comp': path.resolve(__dirname, 'src/components'),
            '@editor': path.resolve(__dirname, 'src/components/editor'),
            '@helper': path.resolve(__dirname, 'src/helper'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@shared': path.resolve(__dirname, 'src/shared'),
            '@test': path.resolve(__dirname, 'src/test')
        }
    }
}