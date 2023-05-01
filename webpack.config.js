const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/script.js',
    bootstrap: './src/js/bootstrap.js',
    aos: './src/js/aos.js',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3004,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },

      {
        test: /\.html$/,
        use: ['html-loader'],
      },

      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
      },

      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name].[hash].[ext][query]',
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/svg/[name].[hash].[ext][query]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.hbs',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/about.hbs',
      filename: 'about.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.hbs',
      filename: 'contact.html',
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: './src/data', to: './data' },
        { from: './src/css', to: './css' },
        { from: './src/assets', to: './assets' },
       
      ],
    }),
  ],
};
