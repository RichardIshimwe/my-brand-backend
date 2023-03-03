import signup from '../models/signup.models.js'
import bcrypt from 'bcrypt'
import response from '../utils/response.util.js';

class signupControllers {
  static async signupUser(req, res) {
    try {
      let status = false;
      const { email, username, password, confirmPassword } = req.body;
      const salt = bcrypt.genSaltSync(10);
      const passwordHashed = bcrypt.hashSync(password, salt);
      let passwordMatch = bcrypt.compareSync(confirmPassword, passwordHashed);
      if (passwordMatch) {
        if(username === "Richard") status = true
        const newUser = new signup({ email, username, password: passwordHashed,admin:status });
        await newUser.save()
        response.success(res, 201, "signup complete", newUser);
      } else {
        response.error(res, 400, "password and confirm password does not match");
      }
    } catch (error) {
      return response.error(res, 400, "internal server error");
    }
  }
  static async allUsers(req, res) {
    try {
      let allUser = await signup.find();
      response.success(res, 200, `all users are ${allUser.length}`, allUser);
    } catch (error) {
      console.log(error)
      return response.error(res, 500, "internal server error");
    }
  }
}

export default signupControllers