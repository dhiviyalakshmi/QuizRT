const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './client/App',
  output: {
    path: path.join('Client','assets'),
    publicPath: '/assets/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx$/,
      query: {
        presets: ['es2015','stage-1','react']
      }
    },
    {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/
    }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx','/index','/index.js','/index.jsx']
  }
};