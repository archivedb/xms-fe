// @flow

require('babel-register')({
  babelrc: false,
  plugins: [
    'transform-flow-strip-types',
    'transform-object-rest-spread',
    'transform-es2015-modules-commonjs',
  ],
})
