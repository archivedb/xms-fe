import Vue from 'vue'
import About from 'src/components/about'

describe('about.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(About),
    })
    expect(vm.$el.querySelector('p').textContent).
      to.equal('this is a vue app')
  })
})
