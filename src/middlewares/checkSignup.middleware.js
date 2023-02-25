import signup from '../models/signup.models.js'

const checkEmailOrUsername = (req, res, next) =>{
    const { email,username } = req.body;
    signup.findOne({ $or:[{email},{username}]},(err,result) => {
     
    if(err){
    return res.status(500).json({error:err})
    }
    if(result){
    return res.status(400).json({
        message: "username or email is already taken"
    })
    }
    next();
    });
};

export default checkEmailOrUsername
