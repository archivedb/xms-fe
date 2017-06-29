import XService from '@/services/x'

describe('services/x.ts', () => {
  it('function XService.getById', async () => {
    const mockId = String(Math.random())
    const x = await XService.getById(mockId)
    expect(x).to.exist
    expect(x.id).to.equal(mockId)
  })
})
