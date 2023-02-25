import signup from '../models/signup.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class login {

  static async checkUser(req, res) {
    const { email, password } = req.body;
    if (email !== "" && password !== "") {
      const check = await signup.findOne({ email });
      const checkPassword = await bcrypt.compare(password, check.password);
      try {
        if (check !== null && checkPassword === false) {
          return res.status(400).json({
            message: "email or password is incorrect"
          })
        }
        const token = jwt.sign({username: check.username}, process.env.SECRET_KEY)

        res.status(200).json({
          message: "welcome to the login page",
          token:token
        })
      } catch (error) {
        res.status(500).json({
          error: error
        })
      }
    } else {
      return res.status(500).json({
        message: "*all fields are required"
      })
    }
  }
}

export default login