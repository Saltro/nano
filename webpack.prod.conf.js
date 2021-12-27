const { merge } = require('webpack-merge'); // 导入webpack-merge模块
const base = require('./webpack.base.conf'); // 导入webpack.base.conf.js配置文件
const path = require('path'); // 导入path模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导入mini-css-extract-plugin模块
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // 导入css-minimizer-webpack-plugin模块
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 导入webpack-bundle-analyzer模块

module.exports = merge(base, {
  mode: 'production',
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
                localIdentName: '[hash:base64:8]',
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
                localIdentName: '[hash:base64:8]',
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
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启用分析器
      generateStatsFile: true,
      statsFilename: 'stats.json',
    }),
  ],
});
