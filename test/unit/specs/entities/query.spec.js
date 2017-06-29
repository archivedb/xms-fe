import Query from '@/entities/query'

describe('entities/query.ts', () => {
  it('function Query.fromQS', async () => {
    const query1 = Query.fromQS({})
    expect(query1).to.exist
    expect(query1.page).to.equal(Query.default.page)

    const query2 = Query.fromQS({
      page: 2,
    })
    expect(query2).to.exist
    expect(query2.page).to.equal(2)
    expect(query2.perpage).to.equal(Query.default.perpage)
  })
})
