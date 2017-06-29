import Vue from 'vue'
import Fiddle from '@/views/fiddle.vue'
import router from '@/router'

describe('views/fiddle.vue', () => {
  it('view fiddle', async () => {
    const Constructor = Vue.extend(Fiddle)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('div.fiddle-view')).
      to.exist
  })
})
