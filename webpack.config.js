const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');

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
    new VueLoader()
  ],
  resolve: {
    extensions: ['.js', '.vue']
  }
};
