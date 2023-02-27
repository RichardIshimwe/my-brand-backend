import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';

const verifyUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return response.error(res, 401, "You have to login first")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY);
        const { admin } = check;
        if (!admin) return response.error(res, 400, "Unauthorized: only the admin can perform the operation")
        next();
    } catch (error) {
        return response.error(res, 500, error);
    }
}
export default verifyUser