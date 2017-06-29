import http from '@/commons/http'

describe('commons/http.ts', () => {
  it('method request', async () => {
    const url = 'https://es.io/api/x'
    const data = { id: '0' }

    // eslint-disable-next-line no-undef
    const response = new Response(JSON.stringify(data), { status: 200 })

    const stub = sinon.stub(window, 'fetch').returns(Promise.resolve(response))

    const requestInit = {
      headers: {
        'X-Data': 'none',
      },
    }

    const r = await http.request(url, requestInit)

    expect(r).to.deep.equal(data)
    expect(stub).to.have.been.calledOnce
    expect(stub.firstCall.args[0]).to.equal(url)
    expect(stub.firstCall.args[1]).to.have.property('headers')
    expect(stub.firstCall.args[1].headers).to.include.keys('X-Data')
    expect(stub.firstCall.args[1].headers['X-Data']).to.equal(requestInit.headers['X-Data'])

    stub.restore()
  })
})
