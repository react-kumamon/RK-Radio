'use strict'

var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var pkg = require('./package.json')

module.exports = {
  name: pkg.name,
  target: 'web',
  devtool: 'source-map',
  entry: './demo/index.js',
  resolve: {
    root: path.join(__dirname, './')
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.tmpl',
      hash: true,
      filename: 'index.html',
      inject: true,
      minify: {
        //collapseWhitespace: true,
        //minifyJS: true
      },
      title: pkg.description,
      appname: pkg.name,
      version: pkg.version,
      author: pkg.author,
      timestamp: Date.now(),
      description: pkg.description
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    }, {
      test: /\.less$/,
      loaders: ['style','css','less']
    }, {
      test: /\.(css)$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/font-woff2'
    }, {
      test: /\.otf(\?.*)?$/, loader: 'file?limit=10000&mimetype=font/opentype'
    }, {
      test: /\.ttf(\?.*)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?.*)?$/,
      loader: 'file?name=[name].[ext]'
    }, {
      test: /\.svg(\?.*)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'
    }, {
      test: /\.(gif|png|jpg|jpeg)$/, loader: 'url?limit=8192'
    }
  ]
  },
  output: {
    path:'./demo/dist',
    filename: pkg.name + '.js'
  }
}
