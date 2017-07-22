var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
var CriticalPlugin = require('webpack-plugin-critical').CriticalPlugin;

let extractStyles = new ExtractTextPlugin('[contenthash].css');

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
    })
  ],
};