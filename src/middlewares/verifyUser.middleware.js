import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import signup from '../models/signup.models.js';

const verifyUser = async (req, res, next) => {
    const {token} = req.cookies;
    if (!token) {
        return response.error(res, 401, "You have to login first")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY)
        const checkUser = await signup.findOne({username: check.username})
        console.log(checkUser)
        if(!checkUser)return response.error(res, 400,"Invalid Token")
        next();
    } catch (error) {
        return response.error(res, 500, error);
    }
}
export default verifyUser