// @flow

import { absPath } from '../build/utils'
import webpackTestConfig from './webpack.test'

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
