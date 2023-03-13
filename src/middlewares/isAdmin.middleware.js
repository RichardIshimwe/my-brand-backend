import response from '../utils/response.util.js'
import jwt from 'jsonwebtoken';
import blog from '../models/blogs.model.js'

const verifyUser = async (req, res, next) => {
    // const { token } = req.cookies;
    let token = req.cookies.token;
    if(req.headers.authorization) token = req.headers.authorization;
    if (!token) {
        return response.error(res, 401, "You have to login,first is required")
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY);
        const { admin,username } = check;
        const { id } = req.params;
        if (admin) return  next();
        if(id){
        const find = await blog.findById({ _id: id});
        if(find){
        if (admin || (find.author === username))return  next()
        }else{
            return response.error(res, 404, `The blog with id:${id} is not found`)
        }
        }
        return response.error(res, 400, "Unauthorized: only the admin or the owner can perform the operation")
    } catch (error) {
        return response.error(res, 500,  "Internal server error");
    }
}
export default verifyUser