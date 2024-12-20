let path = require('path')

let conf = {
  entry: './es6/scripts.js',
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'main.js',
    publicPath: 'js/',
  },
  devServer: {
    overlay: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // exclude: '/node_modules/',
      },
    ],
  },
}

module.exports = (env, options) => {
  conf.devtool =
    options.mode === 'production' ? false : 'eval-cheap-module-source-map'
  console.log(options.mode)

  return conf
}
