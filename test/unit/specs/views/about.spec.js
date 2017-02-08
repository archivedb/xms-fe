import Vue from 'vue'
import About from 'src/views/about.vue'
import router from 'src/router'

describe('views/about.vue', () => {
  it('view about', async () => {
    const Constructor = Vue.extend(About)
    const vm = new Constructor({ router }).$mount()
    expect(vm.$el.querySelector('h1').textContent).
      to.equal('about vue')
  })
})
