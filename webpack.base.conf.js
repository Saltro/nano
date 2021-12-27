const path = require('path'); // 导入path模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 导入html-webpack-plugin模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导入mini-css-extract-plugin模块

module.exports = {
  // 入口文件
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/, // 排除 node_modules 目录
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
        include: [path.resolve(__dirname, 'src', 'assets'), /node_modules/],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]', // 将图标名称作为导出的 id
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 自动解析确定的扩展
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置@符号的路径
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template/index.html'), // 模板位置
      filename: 'index.html', // 输出后的文件名，路径是 output.path
      title: 'Nano', // 传给模板的变量
    }),
  ],
  // 出口文件
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    },
  },
};
