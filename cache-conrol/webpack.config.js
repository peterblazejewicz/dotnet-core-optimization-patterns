const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'assets/js/main.js'),
  output: {
    path: path.join(__dirname, 'wwwroot/js'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Cache Control',
      filename: path.join(__dirname, 'wwwroot/index.html'),
      template: path.join(__dirname, 'assets/index.template.html')
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
  ]
}
