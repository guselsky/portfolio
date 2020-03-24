const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const isProduction = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  entry: [
    './src/scripts/App.js',
    './src/styles/style.scss'
],
  output: {
    filename: 'main.js',
    path: isProduction ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, './'),
  },
  devServer: {
    before: function(app, server) {
      server._watch('./**/*.html')
    },
    contentBase: path.join(__dirname, './'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  mode: "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: './style.css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
              publicPath: './',
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ],
  },
};