import Vue from 'vue'
import XsInfo from 'src/components/xs-info.vue'
import X from 'src/entities/x'
import router from 'src/router'

describe('components/xs-info.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      data: () => ({
        x: X.default,
      }),
      template: `
        <xs-info :xs="[x]"/>
      `,
      components: { XsInfo },
      router,
    })
    expect(vm.$el.querySelector('tbody').childElementCount).
      to.equal(1)
  })
})
