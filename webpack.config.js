var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: {
    bundle: './resources/assets/js/index.js',
    vendor: ['react', 'react-router', 'jquery', 'bootstrap']
  },
  output: {
    path: path.resolve('public'),
    publicPath: '/public/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?)$/,
        use: ['url-loader']
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader']
      },
      {
        test: /.(jpg|png)$/,
        use: 'file-loader?name=images/[name].[ext]'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, './resources/assets/js/'),
      path.resolve(__dirname, './resources/assets/js/components'),
      path.resolve(__dirname, './resources/assets/styles'),
      path.resolve(__dirname, './resources/assets/images'),
      path.resolve(__dirname, './resources/assets/js/api'),
      path.resolve(__dirname, './resources/assets/js/plugins')
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '/js/vendor.js',
      minChunks: 2
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })
  ]
}


