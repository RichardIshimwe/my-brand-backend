class response {

  static success(res, status, message, data) {
    res.status(status).json({
      message: message,
      data: data,
    })
  }
  static error(res, status, message) {
    res.status(status).json({
      message: message
    })
  }

}

export default response