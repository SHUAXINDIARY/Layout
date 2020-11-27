const path = require('path')
// 创建html 并引入需要打包后的js
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 打包前清除旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: {
    // app: './src/index.js',
    app: './src/main.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 开启source-map，方便调试
  // 会显示具体的bug出现在打包前的哪个文件
  devtool: 'inline-source-map',
  // 去除build后打包的license.txt
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "less-loader" // compiles Less to CSS
        }]
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    // 显示打包进度
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    // 使用模板
    new HtmlWebpackPlugin({
      template: 'src/html/index.html'
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
}