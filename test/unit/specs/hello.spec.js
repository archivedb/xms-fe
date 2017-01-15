import Vue from 'vue'
import Hello from 'src/components/hello'

describe('hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Hello),
    })
    expect(vm.$el.querySelector('h1').textContent).
      to.equal('welcome to your vue app')
  })
})
