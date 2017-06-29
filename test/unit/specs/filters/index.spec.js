import { capitalize, inspect } from '@/filters'

describe('filters/index.ts', () => {
  it('function capitalize', async () => {
    expect(capitalize('abc')).to.equal('Abc')
    expect(capitalize('1bc')).to.equal('1bc')
    expect(capitalize('')).to.equal('')
  })

  it('function inspect', async () => {
    expect(inspect('abc')).to.equal('"abc"')
    expect(inspect({ a: 1 })).to.equal('{\n  "a": 1\n}')
  })
})
