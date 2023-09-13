var webpack = require('webpack');
var environment = process.env.NODE_ENV || 'development';
var dev = environment !== 'production';

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    module: {
        noParse: /jquery-migrate-3.0.1.min.js/,
    },
    plugins: [
        new webpack.ProvidePlugin({
            __DEV__: dev,
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'jQuery': 'jquery',
            'popper.js': 'popper'
        })
    ],


};