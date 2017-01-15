import Vue from 'vue'
import Home from 'src/components/home'
import router from 'src/router'

describe('home.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Home),
      router,
    })
    expect(vm.$el.querySelector('h2').textContent).
      to.equal('routes')
  })
})
