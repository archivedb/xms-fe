import Vue from 'vue'
import DashboardX from '@/views/dashboard-x.vue'
import router from '@/router'

describe('views/dashboard-x.vue', () => {
  it('view dashboard-x', async () => {
    const Constructor = Vue.extend(DashboardX)
    const vm = new Constructor({ router })
    vm.$route.params.id = 'x'
    vm.$mount()
    expect(vm.$el.querySelector('div.dashboard-x-view')).
      to.exist
  })
})
