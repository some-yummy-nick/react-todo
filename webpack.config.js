const webpack = require('webpack'),
      path = require("path");

module.exports = {
  entry: './source/main.jsx',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "public")
  },

  module: {
    rules: [{
      test: /\.jsx?$/,
      use:'babel-loader'
    }]
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    compress: true,
    host: "192.168.0.112",
    port: 3000,
    stats: "errors-only"
  },
  resolve:{
    extensions:['.js', '.jsx']
  }
};