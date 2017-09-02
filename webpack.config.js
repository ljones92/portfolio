const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;
const ManifestPlugin = require('webpack-manifest-plugin');

const extractStyles = new ExtractTextPlugin('[contenthash].css');

module.exports = {
    context: path.resolve(__dirname, './app'),
    entry: {
        app: ["./main.jsx", "./assets/scss/main.scss"],
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[hash].js',
        publicPath: '/', 
    },
    devServer: {
        contentBase: path.resolve(__dirname, './app'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015'] },
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    disable: process.env.NODE_ENV !== 'production',
                })
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg|ico)$/,
                use: [
                    'file-loader?name=assets/[hash].[ext]',
                    'image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "15", speed: 4}, mozjpeg: {quality: 15}}'
                ]
            },
            { test: /\.json$/, use: 'json-loader' }
        ],
  },
  resolve: {
      extensions: ['.js', '.jsx', '.scss'],
  },
  plugins: [
    extractStyles,
    new HtmlWebpackPlugin({
        template: 'index.ejs'
    }),
    new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'async'
    }),
    new CriticalPlugin({
        src: 'index.html',
        inline: true,
        minify: true,
        dest: 'index.html'
    }),
    new ManifestPlugin()
  ],
};