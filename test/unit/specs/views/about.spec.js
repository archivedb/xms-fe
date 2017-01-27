import Vue from 'vue'
import About from 'src/views/about.vue'

describe('views/about.vue', () => {
  it('should render correct contents', async () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(About),
    })
    // http://cn.vuejs.org/v2/guide/unit-testing.html#断言异步更新
    await Vue.nextTick()
    expect(vm.$el.querySelector('h1').textContent).
      to.equal('this is a vue app')
  })
})
