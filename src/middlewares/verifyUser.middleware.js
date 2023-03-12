import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import signup from '../models/signup.models.js';
import bodyParser from 'body-parser';
import Express from 'express';
const app = Express.Router();

const verifyUser = async (req, res, next) => {
    let token = req.cookies.token;
    if(req.headers.authorization) token = req.headers.authorization;
    if (!token) {
         return response.error(res, 401, "You have to login first")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY)
        const checkUser = await signup.findOne({ username: check.username })
        if (!checkUser) return response.error(res, 400, "Invalid Token")
        next();
    } catch (error) {
        return response.error(res, 500, "internal server  error");
    }
}
export default verifyUser