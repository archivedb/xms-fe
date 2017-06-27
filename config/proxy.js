// https://github.com/chimurai/http-proxy-middleware

export default {
  '/api': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
}
