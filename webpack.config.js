const path = require('path');

module.exports = {
  entry: './src/app.js',
  // entry: './src/playground/hoc.js',
  output: {
    path: path.join(__dirname, 'public'), // every machine has different path so this line creates generic path for every
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/, //s den sonraki ? si optinal yapiyor
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}