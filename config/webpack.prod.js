// @flow

import webpack from 'webpack'
import merge from 'webpack-merge'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import { build as config } from '../config'
import { assetsPath, styleLoaders, stringifyObjectValues } from '../build/utils'
import webpackBaseConfig from './webpack.base'

export default merge(webpackBaseConfig, {
  devtool: config.productionSourceMap ? '#source-map' : false,
  module: {
    rules: styleLoaders({ sourceMap: config.productionSourceMap, extract: true }),
  },
  output: {
    path: config.assetsRoot,
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js'),
  },
  plugins: [
    // http://vuejs.github.io/vue-loader/en/workflow/production.html
    new webpack.DefinePlugin({
      'process.env': stringifyObjectValues(config.env),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
    }),
    // extract css into its own file
    new ExtractTextPlugin(assetsPath('css/[name].[contenthash].css')),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.index,
      template: 'src/index.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency',
    }),
    // split vendors js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      minChunks: (module, count) => (
        // any required modules inside node_modules are extracted to vendors
        module.resource &&
          module.resource.endsWith('.js') &&
          module.resource.includes('node_modules')
      ),
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendors hash from being updated whenever app bundle is updated
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      chunks: ['vendors'],
    }),
  ],
})
