import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/home'
import Hello from './components/hello'
import About from './components/about'
import NotFound from './components/not-found'

Vue.use(Router)

const routes = [{
  path: '/',
  component: Home,
}, {
  path: '/hello',
  component: Hello,
}, {
  path: '/about',
  component: About,
}, {
  path: '*',
  component: NotFound,
}]

export default new Router({
  mode: 'history',
  routes,
})
