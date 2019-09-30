var path = require('path');
var webpack = require('webpack');

const coreUrl = process.env.CORE_URL ? process.env.CORE_URL : '/'
process.env.NODE_ENV = "development"

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
     './frontend/index.jsx'
  ],
  output: {
    filename: 'bundle/bundle-dev.js',
    path: path.resolve(__dirname, 'backend/static'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
        // include: path.resolve(__dirname, "frontend"),
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],

      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|otf)([\?]?.*)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts'
            }
          }
        ]
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        HOME: JSON.stringify(process.env.HOME),
        CORE_URL: JSON.stringify(coreUrl),
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}