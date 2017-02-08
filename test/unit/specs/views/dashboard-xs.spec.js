import Vue from 'vue'
import DashboardXs from 'src/views/dashboard-xs.vue'
import router from 'src/router'

describe('views/dashboard-xs.vue', () => {
  it('view dashboard-xs', async () => {
    const Constructor = Vue.extend(DashboardXs)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('h3').textContent).
      to.not.empty
  })
})
