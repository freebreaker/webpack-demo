
var path = require('path');
const webpack = require('webpack'); //访问内置的插件

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
    plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ]
};