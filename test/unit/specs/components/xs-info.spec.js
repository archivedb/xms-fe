import Vue from 'vue'
import X from 'src/entities/x'
import XsInfo from 'src/components/xs-info.vue'
import router from 'src/router'

describe('components/xs-info.vue', () => {
  it('component xs-info', () => {
    const vm = new Vue({
      data: () => ({
        x: X.default,
      }),
      template: `
        <xs-info :xs="[x]"/>
      `,
      components: { XsInfo },
      router,
    }).$mount()
    expect(vm.$el.querySelector('tbody').childElementCount).
      to.equal(1)
  })
})
