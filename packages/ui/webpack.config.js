const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'main.js',
      path: path.resolve(__dirname, process.env.NODE_ENV == 'production' ? 'dist' : 'devdist')
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
    contentBase: path.join(__dirname, 'devdist'),
    compress: true,
    port: 9000
  }
}