// the vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app'
import router from './router'

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
})
