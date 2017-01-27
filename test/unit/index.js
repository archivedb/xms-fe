import 'src/polyfills'
import 'src/vendors'

// https://webpack.github.io/docs/context.html

// require all src files except main.js and index.html for coverage
const srcContext = require.context('src', true, /^\.\/(?!(?:main(?:\.js)?)|(?:index\.html))/)
srcContext.keys().map(srcContext)

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().map(testsContext)
