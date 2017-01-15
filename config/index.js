// see http://vuejs-templates.github.io/webpack for documentation.
const path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // gzip off by default as many popular static hosts such as
    // surge or netlify already gzip all static assets for you.
    // before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // css sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the css-loader readme
    // (https://github.com/webpack/css-loader#sourcemaps)
    // in our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  }
}
