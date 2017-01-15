const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../config')

exports.assetsPath = (_path) => {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = (options = {}) => {
  // generate loader string to be used with extract text plugin
  const generateLoaders = (loaders) => {
    const sourceLoader = loaders.map((loader) =>
      /\?/.test(loader)
        ? (loader.replace(/\?/, '-loader?') +
          (options.sourceMap ? '&sourceMap' : ''))
        : (loader + '-loader' +
          (options.sourceMap ? '?sourceMap' : ''))
    ).join('!')

    // extract css when that option is specified
    // (which is the case during production build)
    return options.extract
      ? ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
      : ['vue-style-loader', sourceLoader].join('!')
  }

  // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
  return {
    css: generateLoaders(['css']),
    postcss: generateLoaders(['css']),
    less: generateLoaders(['css', 'less']),
    sass: generateLoaders(['css', 'sass?indentedSyntax']),
    scss: generateLoaders(['css', 'sass']),
    stylus: generateLoaders(['css', 'stylus']),
    styl: generateLoaders(['css', 'stylus'])
  }
}

// generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = (options) => {
  const loaders = exports.cssLoaders(options)
  return Object.entries(loaders).
    map(([extension, loader]) => ({
      test: new RegExp('\\.' + extension + '$'),
      loader: loader,
    }))
}
