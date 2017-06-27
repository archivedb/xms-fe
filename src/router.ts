import Vue from 'vue'
import Router from 'vue-router'
import { RouteConfig } from 'vue-router'

import About from './views/about.vue'
import Fiddle from './views/fiddle.vue'
import Routes from './views/routes.vue'
import DashboardXs from './views/dashboard-xs.vue'
import DashboardX from './views/dashboard-x.vue'
import NotFound from './views/not-found.vue'

Vue.use(Router)

export const routes: Array<RouteConfig> = [{
  path: '/',
  redirect: '/dashboard',
}, {
  path: '/about',
  component: About,
}, {
  path: '/fiddle',
  component: Fiddle,
}, {
  path: '/routes',
  component: Routes,
}, {
  path: '/dashboard',
  component: DashboardXs,
}, {
  path: '/dashboard/x/:id',
  component: DashboardX,
}, {
  path: '*',
  component: NotFound,
}]

export default new Router({
  mode: 'history',
  routes,
})
