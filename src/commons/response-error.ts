export interface ResponseErrorData {
  message: string
}

export default class ResponseError extends Error {
  constructor(
    readonly response: Response,
    readonly data: ResponseErrorData = { message: '' },
  ) {
    super(response.statusText)
  }
}
