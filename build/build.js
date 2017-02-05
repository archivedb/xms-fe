// @flow

import ora from 'ora'
import path from 'path'
import shell from 'shelljs'
import webpack from 'webpack'

import { build as config } from '../config'
import webpackConfig from '../config/webpack.prod'

export const start = () => {
  console.log(`
  Tips:
    built files are meant to be served over an http server.
    open index.html over file:// won't work.
  `)

  const assetsPath = path.join(config.assetsRoot, config.assetsSubDirectory)
  shell.rm('-rf', assetsPath)
  shell.mkdir('-p', assetsPath)
  shell.cp('-R', 'static/*', assetsPath)

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
      chunkModules: false,
    }) + '\n')
  })
}

export default { start }

if (require.main === module) {
  start()
}
