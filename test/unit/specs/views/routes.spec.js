import Vue from 'vue'
import Routes from '@/views/routes.vue'
import router from '@/router'

describe('views/routes.vue', () => {
  it('view routes', async () => {
    const Constructor = Vue.extend(Routes)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('div.routes-view')).
      to.exist
  })
})
