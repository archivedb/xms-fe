module.exports = {
  root: true,
  // https://github.com/feross/eslint-config-standard
  extends: 'standard',
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'linebreak-style': [2, 'unix'],
    'comma-dangle': [2, 'only-multiline'],
    'dot-location': [2, 'object'],
    'no-debugger': process.env.NODE_ENV === 'production' ? [2] : [0],
  },
}
