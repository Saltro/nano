const { merge } = require('webpack-merge'); // 导入webpack-merge模块
const base = require('./webpack.base.conf'); // 导入webpack.base.conf.js配置文件
const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin'); // 导入stylelint-webpack-plugin模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导入mini-css-extract-plugin模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 导入html-webpack-plugin模块

module.exports = merge(base, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
        ],
        exclude: [path.resolve(__dirname, 'src', 'assets'), /node_modules/],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase', // 将 kebab-case 转换为 camelCase
              },
            },
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
          },
        ],
        exclude: [/src\/assets/, /node_modules/],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new StylelintWebpackPlugin({
      configFile: path.resolve(__dirname, './.stylelintrc.js'),
      files: ['src/**/*.{less,css}'],
      customSyntax: 'postcss-less', // 适配 less 语法
      fix: true, // 自动格式化
      lintDirtyModulesOnly: true, // 仅检查变化的代码
      threads: true, // 多线程
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './template/index.html'), // 模板位置
      filename: 'index.html', // 输出后的文件名，路径是 output.path
      title: 'Nano', // 传给模板的变量
      cdn: {
        js: [
          'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.development.js',
          'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.development.js',
          'https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.3/antd.js',
          'https://cdn.bootcdn.net/ajax/libs/leaflet/1.7.1/leaflet-src.min.js',
          'https://cdn.jsdelivr.net/npm/react-leaflet@3.2.2/umd/react-leaflet.js',
          'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js',
          'https://cdn.jsdelivr.net/npm/history@5.1.0/umd/history.production.min.js',
          'https://cdn.jsdelivr.net/npm/react-router@6.0.2/umd/react-router.development.js',
          'https://cdn.jsdelivr.net/npm/react-router-dom@6.0.2/umd/react-router-dom.development.js',
        ],
        css: [
          'https://cdn.bootcdn.net/ajax/libs/antd/4.17.3/antd.css',
          'https://cdn.bootcdn.net/ajax/libs/leaflet/1.7.1/leaflet.min.css',
        ],
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'), // 告诉服务器从指定目录中提供静态文件，也即打包后的文件
    },
    port: 8080, // 设置端口
    open: true, // 自动打开浏览器
    hot: true, // 开启热更新
    historyApiFallback: true, // 当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
  },
});
