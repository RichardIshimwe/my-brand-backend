import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import blog from '../models/blogs.model.js'

const verifyUser = async (req, res, next) => {
    // const { token } = req.cookies;
    let token;
    if(req.headers.authorization) token = req.headers.authorization;
    if(req.cookies.token) token = req.cookies.token;
    if (!token) {
        return response.error(res, 401, "You have to login first")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY);
        const { admin,username } = check;
        console.log(admin)
        console.log(username)
        const { id } = req.params;
        const find = await blog.findById({ _id: id});
        if (admin || (find.author === username))
        if (admin) return  next();
        return response.error(res, 400, "Unauthorized: only the admin or the owner can perform the operation")
    } catch (error) {
        console.log(error)
        return response.error(res, 500, error);
    }
}
export default verifyUser