const path = require('path');

const resolve = file => path.resolve(__dirname, file);

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve('../dev')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  //...
  devServer: {
    index: 'index.html',
    contentBase: resolve('../dev'),
    compress: true,
    port: 9000
  }
}