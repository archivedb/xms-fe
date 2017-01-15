// for authoring nightwatch tests, see
// http://nightwatchjs.org/guide#usage

export default {
  'page /hello': (browser) => {
    // automatically uses dev server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser.
      url(`${devServer}/hello`).
      waitForElementVisible('#app', 5000).
      assert.elementPresent('.hello').
      assert.containsText('h1', 'welcome to your vue app').
      assert.count('img', 1).
      end()
  }
}
