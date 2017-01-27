// http://nightwatchjs.org/guide#usage
export default {
  'page /about': (browser) => {
    const url = browser.globals.devServerUrl
    browser.
      url(`${url}/about`).
      waitForElementVisible('#app', 5000).
      assert.elementPresent('.about-view').
      assert.containsText('h1', 'this is a vue app').
      assert.count('img', 1).
      end()
  },
}
