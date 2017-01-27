// @flow

require('babel-register')
const fs = require('fs')
const chromedriver = require('chromedriver')
const { dev: config } = require('../config')

const seleniumServerDir = 'node_modules/selenium-server/lib/runner/'
const seleniumServerFilename = fs.readdirSync(seleniumServerDir).
  find((name) => name.includes('selenium-server-standalone')) || ''
const seleniumServerPath = seleniumServerDir + seleniumServerFilename

console.log(`Using selenium-server:\n  ${seleniumServerPath}\n`)

// http://nightwatchjs.org/guide#settings-file
module.exports = {
  src_folders: ['test/e2e/specs'],
  output_folder: 'test/e2e/reports',
  custom_commands_path: ['node_modules/nightwatch-helpers/commands'],
  custom_assertions_path: ['node_modules/nightwatch-helpers/assertions'],

  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    host: '127.0.0.1',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerUrl: `http://localhost:${config.port}`,
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      },
    },
  },
}
