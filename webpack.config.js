const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const ssi = require('connect-ssi');

module.exports = {
  entry: './public/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 9000,
        server: {
          baseDir: ['public'],
          middleware: [
            ssi({
              baseDir: path.resolve(__dirname, 'public'),
              ext: '.html',
            }),
          ],
        },
        files: ['public/**/*'],
      },
      {
        reload: true,
      }
    ),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
