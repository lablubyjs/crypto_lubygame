const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@shared': path.resolve(__dirname, './src/shared'),
            '@store': path.resolve(__dirname, './src/store'),
        },
    },
};
