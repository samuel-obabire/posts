class HttpError extends Error {
  constructor(msg, code = 500) {
    super()
    this.message = msg
    this.code = code
  }
}

export default HttpError
