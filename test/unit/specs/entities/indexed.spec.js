import Indexed from '@/entities/indexed'

describe('entities/indexed.ts', () => {
  it('function Indexed.indexify', async () => {
    const indexed1 = Indexed.indexify([])
    expect(indexed1).to.exist
    expect(indexed1).to.be.empty

    const items = [{ id: '1' }, { id: '2' }]

    const indexed2 = Indexed.indexify(items)
    expect(indexed2).to.exist
    expect(Object.keys(indexed2)).to.have.lengthOf(items.length)
    items.forEach(item => {
      expect(indexed2[item.id]).to.exist
      expect(indexed2[item.id]).to.equal(item)
    })
  })
})
