// @flow

import autoprefixer from 'autoprefixer'
import eslintFriendlyFormatter from 'eslint-friendly-formatter'

import config from '../config'
import { absPath, assetsPath, vueCssLoaders } from '../build/utils'

// check env & config/index.js to decide whether to enable css source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
const cssSourceMapDev =
  process.env.NODE_ENV === 'development' && config.cssSourceMap || false
const cssSourceMapProd =
  process.env.NODE_ENV === 'production' && config.productionSourceMap || false
const cssSourceMap = cssSourceMapDev || cssSourceMapProd

export default {
  entry: {
    app: absPath('src/main.js'),
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.vue', '.js', '.ts', '.json'],
    fallback: [absPath('node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': absPath('src'),
      'assets': absPath('src/assets'),
      'components': absPath('src/components'),
    },
  },
  resolveLoader: {
    fallback: [absPath('node_modules')],
  },
  module: {
    preLoaders: [{
      test: /\.vue$/,
      loader: 'eslint',
      exclude: /node_modules/,
    }, {
      test: /\.jsx?$/,
      loader: 'eslint',
      exclude: /node_modules/,
    }],
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      exclude: /node_modules/,
    }, {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      exclude: /node_modules/,
    }, {
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: assetsPath('images/[name].[hash:7].[ext]'),
      },
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url',
      query: {
        limit: 10000,
        name: assetsPath('fonts/[name].[hash:7].[ext]'),
      },
    }],
  },
  eslint: {
    formatter: eslintFriendlyFormatter,
  },
  vue: {
    loaders: vueCssLoaders({ sourceMap: cssSourceMap }),
    postcss: [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ],
  },
}
