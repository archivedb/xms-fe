import installing from 'src/filters/installing'

describe('filters/installing.ts', () => {
  it('function installing', async () => {
    const mockVue = {
      filter: sinon.spy(),
    }
    const filters = {
      aFilter: x => x,
      bFilter: x => x,
    }
    const plugin = {
      install: installing(filters),
    }
    plugin.install(mockVue)
    expect(mockVue.filter).to.have.callCount(Object.keys(filters).length)
  })
})
