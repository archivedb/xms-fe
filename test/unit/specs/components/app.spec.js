import Vue from 'vue'
import App from '@/components/app.vue'
import router from '@/router'

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
