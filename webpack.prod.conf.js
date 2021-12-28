const { merge } = require('webpack-merge'); // 导入webpack-merge模块
const base = require('./webpack.base.conf'); // 导入webpack.base.conf.js配置文件
const path = require('path'); // 导入path模块
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 导入mini-css-extract-plugin模块
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin'); // 导入css-minimizer-webpack-plugin模块
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // 导入webpack-bundle-analyzer模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 导入html-webpack-plugin模块
const CompressionWebpackPlugin = require('compression-webpack-plugin'); // 导入compression-webpack-plugin模块

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
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled', // 不启用分析器
      generateStatsFile: true,
      statsFilename: 'stats.json',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'template', 'index.html'),
      filename: 'index.html', // 输出后的文件名，路径是 output.path
      title: 'Nano',
      cdn: {
        js: [
          'https://cdn.bootcdn.net/ajax/libs/react/17.0.2/umd/react.production.min.js',
          'https://cdn.bootcdn.net/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.3/antd.min.js',
          'https://cdn.bootcdn.net/ajax/libs/leaflet/1.7.1/leaflet-src.min.js',
          'https://cdn.jsdelivr.net/npm/react-leaflet@3.2.2/umd/react-leaflet.min.js',
          'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js',
          'https://cdn.jsdelivr.net/npm/history@5.1.0/umd/history.production.min.js',
          'https://cdn.jsdelivr.net/npm/react-router@6.0.2/umd/react-router.production.min.js',
          'https://cdn.jsdelivr.net/npm/react-router-dom@6.0.2/umd/react-router-dom.production.min.js',
        ],
        css: [
          'https://cdn.bootcdn.net/ajax/libs/antd/4.17.3/antd.min.css',
          'https://cdn.bootcdn.net/ajax/libs/leaflet/1.7.1/leaflet.min.css',
        ],
      },
    }),
    new CompressionWebpackPlugin({
      test: /\.(js|tff|css|html|svg)$/,
      threshold: 10240, // 对超过10k的数据压缩
    }),
  ],
});
