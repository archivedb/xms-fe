import Vue from 'vue'
import MainLayout from 'src/components/layouts/main-layout.vue'
import router from 'src/router'

describe('components/layouts/main-layout.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
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
    })
    expect(vm.$el.querySelector('div.content').textContent).
      to.equal('test-content')
  })
})
