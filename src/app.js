import Vue from 'vue'
import router from './router'
// import store from './store'
import App from './views/app.vue'

export { router }

export const createApp = () =>
  new Vue({
    render: h => h(App),
    router,
  })

export default createApp()
