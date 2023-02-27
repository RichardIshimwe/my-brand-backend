import messageModel from '../models/messages.model.js'
import response from '../utils/response.util.js'

class message {

    static async sendMessage(req, res) {
        try {
            const { names, email, message } = req.body;
            const newMessage = await messageModel.create({ names, email, message });
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
}

export default message
