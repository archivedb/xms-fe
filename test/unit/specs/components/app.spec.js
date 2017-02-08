import Vue from 'vue'
import App from 'src/components/app.vue'
import router from 'src/router'

describe('components/app.vue', () => {
  it('component app', () => {
    const vm = new Vue({
      template: `
        <app/>
      `,
      components: { App },
      router,
    }).$mount()
    expect(vm.$el.id).to.equal('app')
  })
})
