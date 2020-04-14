/* eslint-disable no-undef */
const path = require('path');
const currentTask = process.env.npm_lifecycle_event;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const fse = require('fs-extra');

class RunAfterCompile {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', function() {
      fse.copySync('./images', './dist/images');
    });
  }
}

let cssConfig = {
  test: /\.(sa|sc|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
    },
    'css-loader',
    'sass-loader',
  ],
};

let jsConfig =  {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: "babel-loader",
  options: {
    presets: ['@babel/preset-env']
  }
}

let config = {
  entry: [
    './src/scripts/App.js',
    './src/styles/style.scss'
  ],
  module: {
    rules: [
      cssConfig,
      jsConfig
    ],
  },
  plugins: [new HtmlWebpackPlugin({filename: 'index.html', template: './index.html'})],
};

//Development settings
if (currentTask == 'dev') {
  config.mode = 'development';
  config.output = {
    filename: 'main.js',
    path: path.resolve(__dirname, './'),
  };

  config.devServer = {
    open: 'chromium',
    before: function(app, server) {
      server._watch('./**/*.html')
    },
    contentBase: path.join(__dirname, './'),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  };
  config.plugins.push(
    new MiniCssExtractPlugin({
      filename: './style.css',
    })
  );
}

// Build Settings
if (currentTask == 'build') {
  config.mode = 'production';
  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  };
  config.optimization = {
    splitChunks: {chunks: 'all'},
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  };
  config.plugins.push(
    new MiniCssExtractPlugin({ filename: 'style.[chunkhash].css' }),
    new RunAfterCompile()
  );
}

module.exports = config;