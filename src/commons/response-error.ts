export interface ResponseErrorData {
  message: string
}

export default class ResponseError extends Error {
  constructor(
    readonly response: Response,
    readonly data: ResponseErrorData = { message: '' },
  ) {
    super(response.statusText)
    // https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#typescript-21
    Reflect.setPrototypeOf(this, ResponseError.prototype)
  }
}
