import signup from '../models/signup.models.js'
import bcrypt from 'bcrypt'

class signupControllers {
   static async signupUser(req,res){
   try{
  const { email,username,password,confirmPassword } = req.body;
  
  const newUser = new signup({ email,username,password,confirmPassword });
  await newUser.save()
  res.status(200).json({
    mesage: newUser
  })
  console.log(newUser)
   }catch(error){
    res.status(400).json({
     message:error
    })
   }
   }
}

export default signupControllers
