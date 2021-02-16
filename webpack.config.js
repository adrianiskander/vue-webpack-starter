const path = require('path');
const VueLoader = require('vue-loader/lib/plugin');
const publicDir = path.join(__dirname, 'public');


module.exports = {
  entry: './src',

  output: {
    filename: 'app.js',
    path: publicDir
  },

  devServer: {
    contentBase: publicDir,
    port: 1000
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
  ]
};
