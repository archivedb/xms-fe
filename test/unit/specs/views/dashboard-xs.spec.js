import Vue from 'vue'
import DashboardXs from '@/views/dashboard-xs.vue'
import router from '@/router'

describe('views/dashboard-xs.vue', () => {
  it('view dashboard-xs', async () => {
    const Constructor = Vue.extend(DashboardXs)
    const vm = new Constructor({ router }).$mount()

    expect(vm.$el.querySelector('h3').textContent).
      to.not.empty
  })

  it('view dashboard-xs on search x', async () => {
    const Constructor = Vue.extend(DashboardXs)
    const vm = new Constructor({ router }).$mount()

    expect(vm.$el.querySelector('div.xs-info-container')).
      to.not.exist

    vm.inputValue = 'x'
    vm.$el.querySelector('button.input-label').click()

    await Vue.nextTick()

    expect(vm.$el.querySelector('div.xs-info-container')).
      to.exist
  })
})
