const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const config = {
  mode: 'development',
  entry: './views/index.js',
  devtool: false,
  output: {
    path: path.resolve(__dirname, 'views', 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 7001, 
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'views/public', 'index.html')
    }),
    new Dotenv({ path: './.env.prod' })
  ]
};

module.exports = config;
