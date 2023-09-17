const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const CssMinimizerWebpack = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const glob = require('glob');

module.exports = {
    entry: './src/js/app.js',
    mode: 'production',
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new PurgeCSSPlugin({
            paths: glob.sync(`./src/**/*`, { nodir: true }),
        }),
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
    },
    optimization: {
        usedExports: true,
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
          }),
          new CssMinimizerWebpack(),
        ],
    },


}