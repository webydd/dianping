let express = require('express');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:express.static(_dirname+'/build'),
        filename:'bundle.js'
    },
    module: {
        loaders: [
            {test:/\.js$/,loader:'babel-loader'},
            {test:/\.(img|svg|jpg|gif)$/,loader:'url-loader？limit=8192'},
            {test:/\.less$/,loader:ExtractTextPlugin.extract('css!less')}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin('./public/index.html'),
        new ExtractTextPlugin('style.css')
    ]
};