// @flow

import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import FriendlyErrors from 'friendly-errors-webpack-plugin'

import { dev as config } from '../config'
import { absPath, styleLoaders, stringifyObjectValues } from '../build/utils'
import webpackBaseConfig from './webpack.base'

export default merge(webpackBaseConfig, {
  devtool: '#eval-source-map',
  entry: {
    app: [absPath('src/main.js'), absPath('build/dev-client')],
  },
  module: {
    loaders: styleLoaders({ sourceMap: config.cssSourceMap }),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': stringifyObjectValues(config.env),
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.WatchIgnorePlugin([absPath('node_modules')]),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.index,
      template: 'src/index.html',
      inject: true,
    }),
    new FriendlyErrors(),
  ],
})
