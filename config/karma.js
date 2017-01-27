// @flow

import webpack from 'webpack'
import merge from 'webpack-merge'

import config from '../config'
import { absPath, styleLoaders, stringifyObjectValues } from '../build/utils'
import webpackBaseConfig from './webpack.base'

const webpackTestConfig = merge(webpackBaseConfig, {
  // use inline sourcemap for karma-sourcemap-loader
  devtool: '#inline-source-map',
  module: {
    loaders: styleLoaders(),
  },
  vue: {
    loaders: {
      js: 'babel-loader',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': stringifyObjectValues(config.env),
    }),
  ],
})

// no need for app entry during tests
Reflect.deleteProperty(webpackTestConfig, 'entry')

// https://github.com/webpack/karma-webpack/
// https://karma-runner.github.io/latest/config/configuration-file.html
module.exports = (config: Object) => {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    https://karma-runner.github.io/latest/config/browsers.html
    // 2. add it to the `browsers` array below
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['spec', 'coverage'],
    files: [absPath('test/unit/index.js')],
    preprocessors: {
      [absPath('test/unit/index.js')]: ['webpack', 'sourcemap'],
    },
    webpack: webpackTestConfig,
    webpackMiddleware: { noInfo: true },
    coverageReporter: {
      dir: absPath('test/unit/coverage'),
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
  })
}
