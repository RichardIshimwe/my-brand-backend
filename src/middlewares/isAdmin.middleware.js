import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import blog from '../models/blogs.model.js'

const verifyUser = async (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return response.error(res, 401, "You have to login first")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY);
        const { admin,username } = check;
        const { id } = req.params;
        const find = await blog.findById({ _id: id});
        console.log(find.author)
        console.log(username);
        if (admin || (find.author === username))return next();
        return response.error(res, 400, "Unauthorized: only the admin or the owner can perform the operation")
    } catch (error) {
        return response.error(res, 500, error);
    }
}
export default verifyUser