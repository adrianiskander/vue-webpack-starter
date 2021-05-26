const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.vue']
    }),
    new VueLoader()
  ],
  resolve: {
    extensions: ['.js', '.vue']
  }
};
