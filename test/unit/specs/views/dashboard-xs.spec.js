import Vue from 'vue'
import DashboardXs from 'src/views/dashboard-xs.vue'
import router from 'src/router'

describe('views/dashboard-xs.vue', () => {
  it('should render correct contents', async () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(DashboardXs),
      router,
    })
    expect(vm.$el.querySelector('h3').textContent).
      to.not.empty
  })
})
