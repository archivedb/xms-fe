import Vue from 'vue'
import NotFound from 'src/components/not-found'

describe('not-found.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(NotFound),
    })
    expect(vm.$el.querySelector('p').textContent).
      to.equal('404')
  })
})
