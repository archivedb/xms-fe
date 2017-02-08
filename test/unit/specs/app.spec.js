import { createApp } from 'src/app'

describe('app.ts', () => {
  it('function createApp', async () => {
    const vm = createApp().$mount()
    expect(vm.$el.id).to.equal('app')
  })
})
