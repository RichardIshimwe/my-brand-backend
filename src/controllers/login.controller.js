import signup from '../models/signup.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import response from '../utils/response.util.js'
import joi from 'joi'

class login {

  static async checkUser(req, res) {
   const { email, password } = req.body;
   const validateLogin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
   })

    try {

     const {error,value} = validateLogin.validate({email,password},{ abortEarly: false })
       if(error){
        const errorMessage = error.details.map((detail) =>{
          return detail.message;
        });
        return res.status(400).json({message:errorMessage})
       }
       const check = await signup.findOne({ email });
      if (check !== null) {
        const checkPassword = await bcrypt.compare(password, check.password);
        if (check !== null && checkPassword === false) {
          return response.error(res, 400, "email or password is incorrect")
        }
        const asignToken = jwt.sign({ username: check.username, admin: check.admin }, process.env.SECRET_KEY);
        res.cookie('token', asignToken, { httpOnly: true });
        const decoded = jwt.verify(asignToken, process.env.SECRET_KEY);
        const { username, admin } = decoded;
        return response.success(res, 200, `${username} you are welcome........`);
      } 
      else 
      {
        return response.error(res, 400, "you have to do a signup");
      } 
    } catch (error) {
      console.log(error)
      return response.error(res, 500, "internal server error");
    }
  }
}

export default login