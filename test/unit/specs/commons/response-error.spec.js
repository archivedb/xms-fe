import ResponseError from '@/commons/response-error'

describe('commons/response-error.ts', () => {
  it('class ResponseError', async () => {
    // eslint-disable-next-line no-undef
    const response = new Response()
    const e = new ResponseError(response)
    expect(e).to.be.an.instanceof(Error)
    expect(e).to.be.an.instanceof(ResponseError)
    expect(e.message).to.equal(response.statusText)
  })
})
