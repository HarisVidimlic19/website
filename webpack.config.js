const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCssPlugin = require('@fullhuman/postcss-purgecss')
const glob = require('glob');
var webpack = require('webpack');
var environment = process.env.NODE_ENV || 'development';
var dev = environment !== 'production';

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
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
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(css)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    }


}

module.exports.plugins.push(
    new PurgeCssPlugin({
        paths: glob.sync(__dirname + 'src'+ '/**/*', { nodir: true })
    })
);

