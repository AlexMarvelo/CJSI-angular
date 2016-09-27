var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackConfig = {
    entry: __dirname + '/app/app.module.js',
    output: {
        path: __dirname + '/build/',
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
          { test: /\.css$/, loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader!autoprefixer-loader'
          )},
          { test: /\.sass$/, loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader!autoprefixer-loader!sass-loader'
          )},
          { test: /\.scss$/, loader: ExtractTextPlugin.extract(
              'style-loader',
              'css-loader!autoprefixer-loader!sass-loader'
          )},
          { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
          { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
          { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
          { test: /\.svg/, loader: 'url-loader?limit=1000000&&mimetype=image/svg+xml' },
          { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1000000&name=[name].[ext]' },
          { test: /\.js$/, loader: 'babel-loader', exclude: [/node_modules/] },
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.html$/, loader: 'raw-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'app/index.html'
        }),
        new ExtractTextPlugin('styles.css')
    ],
    eslint: {
        configFile: '.eslintrc'
    }
};



module.exports = webpackConfig;
