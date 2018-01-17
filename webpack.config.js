const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          options: {
            bypassOnDebug: true,
          },
        },
      ],
    }]
  },
  plugins: []
};

module.exports = config;