// @flow

import spawn from 'cross-spawn'
import server from './dev-server'

// 1. start the dev server using production config
server.start()

// 2. run the nightwatch test suite against it to run in additional browsers:
//    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
//    2. add it to the --env flag below
// or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
// for more information on nightwatch's config file, see
// http://nightwatchjs.org/guide#settings-file

const options = [
  '--config', 'config/nightwatch.js',
  '--env', 'chrome',
]

const runner = spawn('node_modules/.bin/nightwatch', options, { stdio: 'inherit' })

runner.on('exit', (code) => {
  server.close()
  process.exit(code)
})

runner.on('error', (err) => {
  server.close()
  throw err
})
