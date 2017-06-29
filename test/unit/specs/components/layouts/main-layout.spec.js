import Vue from 'vue'
import MainLayout from '@/components/layouts/main-layout.vue'
import router from '@/router'

describe('components/layouts/main-layout.vue', () => {
  it('component main-layout', () => {
    const vm = new Vue({
      data: () => ({
        user: {
          name: 'U',
        },
      }),
      template: `
        <main-layout :user="user">
          <div class="content">
            <p>test-content</p>
          </div>
        </main-layout>
      `,
      components: { MainLayout },
      router,
    }).$mount()
    expect(vm.$el.querySelector('div.content').textContent).
      to.equal('test-content')
  })
})
