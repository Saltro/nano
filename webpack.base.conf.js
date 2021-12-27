const path = require('path'); // 导入path模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导入mini-css-extract-plugin模块
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 导入clean-webpack-plugin模块

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
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    antd: 'antd',
    leaflet: 'leaflet',
    'react-leaflet': 'ReactLeaflet',
    axios: 'axios',
    'react-router-dom': 'ReactRouterDOM',
    'react-router': 'ReactRouter',
    history: 'history',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // 自动解析确定的扩展
    alias: {
      '@': path.resolve(__dirname, 'src'), // 设置@符号的路径
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename], // 构建依赖的config文件（通过 require 依赖）内容发生变化时，缓存失效
    },
  },
};
