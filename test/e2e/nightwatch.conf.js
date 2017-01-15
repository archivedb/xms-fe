require('babel-register')
const fs = require('fs')
const config = require('../../config')

const seleniumServerDir = 'node_modules/selenium-server/lib/runner/'
const seleniumServerFilename = fs.readdirSync(seleniumServerDir).
  find((filename) => filename.includes('selenium-server-standalone'))
const seleniumServerPath = seleniumServerDir + seleniumServerFilename

console.log(`Using selenium-server: ${seleniumServerPath}\n`)

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
      'webdriver.chrome.driver': require('chromedriver').path
    },
  },

  test_settings: {
    default: {
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: `http://localhost:${process.env.PORT || config.dev.port}`
      },
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true,
      }
    },
  },
}
