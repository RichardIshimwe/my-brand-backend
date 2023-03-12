import response from "../utils/response.util.js";
import blog from "../models/blogs.model.js";
import jwt from "jsonwebtoken";

class comment {
  static async comment(req, res) {
    const { id } = req.params, _id = id;
    let username = "User";
    let token = req.cookies.token;
    if(req.headers.authorization) token = req.headers.authorization;
    if(token){
      username  = jwt.verify(token, process.env.SECRET_KEY).username;
    }
    const { comment } = req.body;
    const objectToPush = { name: username, comment: comment };
    const singleBlog = await blog.findOne({ _id: id });
    if (!singleBlog) {
        return response.error(res, 404, `The blog with id:${id} is not found`)
    }
    const blogToComment = await blog.findByIdAndUpdate(_id, { $push: { comments: objectToPush } }, { new: true })
    response.success(res, 200, "blog found", blogToComment)
  }

}

export default comment