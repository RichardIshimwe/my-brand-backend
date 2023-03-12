import messageModel from '../models/messages.model.js'
import response from '../utils/response.util.js'

class message {

    static async sendMessage(req, res) {
        try {
            const { names, email, message } = req.body;
            let check = false;
            const newMessage = await messageModel.create({ names, email, message,check });
            response.success(res, 200, "message sent", newMessage)
        } catch (error) {
            return response.error(res, 500, "internal server error");
        }
    }
    static async displayMessage(req, res) {
        try {
            const allMessage = await messageModel.find();
            response.success(res, 200, `all messages are:${allMessage.length}`, allMessage);
        } catch (error) {
            return response.error(res, 500, "internal server error")
        }
    }
    static async checkMessage(req, res) {
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

export default message
