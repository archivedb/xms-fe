import qs from 'qs'

import ResponseError, { ResponseErrorData } from './response-error'

const mergeRequestInit = (defaultOptions: RequestInit, options: RequestInit): RequestInit => ({
  ...defaultOptions,
  ...options,
  headers: Object.assign({}, defaultOptions.headers, options.headers),
})

/**
 * @rejects {ResponseError} when server respond 40x or 50x
 */
const checkStatus = async (response: Response): Promise<Response> => {
  if (!response.ok) {
    const data = (await response.json().catch(() => ({ message: '' }))) as ResponseErrorData
    throw new ResponseError(response, data)
  }
  return response
}

export class HttpClient {

  constructor(
    private defaultRequestInit: RequestInit = {},
  ) {}

  /**
   * @tutorial https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
   * @rejects {ResponseError | SyntaxError | TypeError}
   */
  request = async <T>(url: string, requestInit: RequestInit = {}): Promise<T> => {
    const actualRequestInit = mergeRequestInit(this.defaultRequestInit, requestInit)
    // trace('[request] request args')({ url, actualRequestInit })
    const response = await fetch(url, actualRequestInit)
    await checkStatus(response)
    const data = await response.json()
    // trace('[request] response data')(data)
    return data
  }

  get = <T>(url: string, data: Object) =>
    this.request<T>(`${url}?${qs.stringify(data)}`)

  post = <T>(url: string, data: Object) =>
    this.request<T>(url, { method: 'POST', body: JSON.stringify(data) })

  put = <T>(url: string, data: Object) =>
    this.request<T>(url, { method: 'PUT', body: JSON.stringify(data) })

  patch = <T>(url: string, data: Object) =>
    this.request<T>(url, { method: 'PATCH', body: JSON.stringify(data) })

  delete = <T>(url: string, data: Object) =>
    this.request<T>(`${url}?${qs.stringify(data)}`, { method: 'DELETE' })

}

const defaultRequestInit: RequestInit = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
}

export default new HttpClient(defaultRequestInit)
