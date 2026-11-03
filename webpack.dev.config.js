const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        publicPath: '/',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
};
