import signup from '../models/signup.models.js'
import bcrypt from 'bcrypt'

class signupControllers {
   static async signupUser(req,res){
   try{
  const { email,username,password,confirmPassword } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passwordHashed = bcrypt.hashSync(password,salt);
  let passwordMatch = bcrypt.compareSync(confirmPassword, passwordHashed);
  const newUser = new signup({ email,username,password:passwordHashed });
  if(passwordMatch){
  await newUser.save()
  res.status(201).json({
    mesage: "signup complete",
    data:newUser
  })
  }else{
    res.status(400).json({
      message: "password and confirm password does not match"
    })
  }
   }catch(error){
    res.status(400).json({
     message:error
    })
   }
   }
   static async allUsers(req, res) {
    try {
      let allUser = await signup.find();
      res.status(200).json({
        message:`all users are ${allUser.length}`,
        allUser:allUser
      })
    } catch (error) {
      res.status(500).json({
        error:"unable to get users"
      })
    }
   }
}

export default signupControllers
