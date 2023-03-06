import response from "../utils/response.util.js";
import blog from "../models/blogs.model.js";
// import jwt from "jsonwebtoken";

class comment {
  static async comment(req, res) {
    const { id } = req.params, _id = id;
    // const { token } = req.cookies;
    // const { username } = jwt.verify(token, process.env.SECRET_KEY);
    const { username,comment } = req.body;
    // const { comment } = req.body;
    const objectToPush = { username:username,comment: comment };
    // const objectToPush = { name: username, comment: comment };
    const blogToComment = await blog.findByIdAndUpdate(_id, { $push: { comments: objectToPush } }, { new: true })
    response.success(res, 200, "thank you for commenting", blogToComment)
  }
}

export default comment