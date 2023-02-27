import response from "../utils/response.util.js";
import blog from "../models/blogs.model.js";
import jwt from "jsonwebtoken";

class comment {
  static async comment(req, res) {
    const { id } = req.params, _id = id;
    const { token } = req.cookies;
    const { username } = jwt.verify(token, process.env.SECRET_KEY);
    const { comment } = req.body;
    const objectToPush = { name: username, comment: comment };
    const blogToComment = await blog.findByIdAndUpdate(_id, { $push: { comments: objectToPush } }, { new: true })
    response.success(res, 200, "blog found", blogToComment)
  }
}

export default comment