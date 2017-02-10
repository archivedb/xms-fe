// https://github.com/chimurai/http-proxy-middleware

export default {
  // '/api': {
  //   target: 'http://localhost:8989',
  // },
  '/api': {
    target: 'http://jsonplaceholder.typicode.com',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  },
}
