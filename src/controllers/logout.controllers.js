import response from '../utils/response.util.js'

class logout {
  static async logout(req, res) {
    res.clearCookie('token');
    return response.error(res, 200, "You are logged out"); 
  }
}

export default logout