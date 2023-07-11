const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'treeShakingLib',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: 'babel-loader'
    }]
  }
};
