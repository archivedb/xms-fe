import { createApp } from 'src/app'

describe('app.js', () => {
  it('should mount correctly', async () => {
    const vm = createApp()
    vm.$mount(document.createElement('div'))
    expect(vm.$el.id).to.equal('app')
  })
})
