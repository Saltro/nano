const { merge } = require('webpack-merge'); // 导入webpack-merge模块
const base = require('./webpack.base.conf'); // 导入webpack.base.conf.js配置文件
const path = require('path');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin'); // 导入stylelint-webpack-plugin模块

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
  plugins: [
    new StylelintWebpackPlugin({
      configFile: path.resolve(__dirname, './.stylelintrc.js'),
      files: ['src/**/*.{less,css}'],
      customSyntax: 'postcss-less', // 适配 less 语法
      fix: true, // 自动格式化
      lintDirtyModulesOnly: true, // 仅检查变化的代码
      threads: true, // 多线程
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
