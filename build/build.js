/* global cp rm mkdir */

process.env.NODE_ENV = 'production'

// https://github.com/shelljs/shelljs
require('shelljs/global')
require('./check-versions')()

const ora = require('ora')
const path = require('path')
const webpack = require('webpack')

const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

console.log(`
  tip:
  built files are meant to be served over an http server.
  opening index.html over file:// won't work.
`)

const assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)
rm('-rf', assetsPath)
mkdir('-p', assetsPath)
cp('-R', 'static/*', assetsPath)

const spinner = ora('building for production...')
spinner.start()

webpack(webpackConfig, (err, stats) => {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})
