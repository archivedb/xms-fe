import Vue from 'vue'
import About from '@/views/about.vue'
import router from '@/router'

describe('views/about.vue', () => {
  it('view about', async () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('h1').textContent).
      to.equal('about vue')
  })
})
