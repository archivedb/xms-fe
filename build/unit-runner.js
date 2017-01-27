// @flow

import path from 'path'
import karma from 'karma'
import { absPath } from './utils'

const options = {
  configFile: absPath('config/karma.js'),
  singleRun: true,
}

// https://karma-runner.github.io/latest/dev/public-api.html
const server = new karma.Server(options)

server.start()
