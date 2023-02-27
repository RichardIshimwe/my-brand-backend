import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import signup from '../models/signup.models.js';

const verifyUser = async (req, res, next) => {
    const {token} = req.cookies;
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY);
        const checkUser = await signup.findOne({username: check.admin});
        if(!checkUser)return response.error(res, 400,"Unauthorized: only the admin can perform the operation")
        next();
    } catch (error) {
        return response.error(res, 500, error);
    }
}
export default verifyUser