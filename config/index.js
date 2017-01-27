// @flow

// https://vuejs-templates.github.io/webpack/

import path from 'path'
import devEnv from './env.dev'
import prodEnv from './env.prod'
import testEnv from './env.test'

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'development'

console.log(`[config/index.js] NODE_ENV: ${process.env.NODE_ENV}\n`)

const base = {
  assetsPublicPath: '/',
  assetsSubDirectory: 'static',
  assetsRoot: path.join(__dirname, '../dist'),
  index: process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '../dist/index.html')
    : 'index.html',
}

export const build = {
  ...base,
  env: process.env.NODE_ENV === 'testing' ? testEnv : prodEnv,
  productionSourceMap: true,
}

export const dev = {
  ...base,
  env: devEnv,
  port: Number(process.env.PORT || 8080),
  proxyTable: {},
  // css sourcemaps off by default because relative paths are "buggy"
  // with this option, according to the css-loader readme
  // (https://github.com/webpack/css-loader#sourcemaps)
  // in our experience, they generally work as expected,
  // just be aware of this issue when enabling this option
  cssSourceMap: false,
}

export default process.env.NODE_ENV === 'development' ? dev : build
