import Vue from 'vue'
import ElementUI from 'element-ui'
import Table from 'src/components/table'

Vue.use(ElementUI)

describe('table.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Table),
    })
    expect(vm.$el.querySelector('table')).
      to.exist
  })
})
