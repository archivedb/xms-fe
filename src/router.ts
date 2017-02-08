import * as Vue from 'vue'
import * as Router from 'vue-router'
import { RouteConfig } from 'vue-router'

import * as About from './views/about.vue'
import * as Fiddle from './views/fiddle.vue'
import * as Routes from './views/routes.vue'
import * as DashboardXs from './views/dashboard-xs.vue'
import * as DashboardX from './views/dashboard-x.vue'
import * as NotFound from './views/not-found.vue'

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
