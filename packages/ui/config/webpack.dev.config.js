const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const resolve = file => path.resolve(__dirname, file);

module.exports = {
  entry: ['./dev/index.js', './src/css/main.css'],
  output: {
    filename: 'main.js',
    path: resolve('../dev'),
    publicPath: '/dev/'
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", "postcss-loader",
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: '../dev/main.css'}),
    new VueLoaderPlugin()
  ],
  //...
  devServer: {
    index: 'index.html',
    contentBase: resolve('../dev'),
    compress: true,
    port: 9000,
    publicPath: '/dev/'
  }
}