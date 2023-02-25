import messageModel from '../models/messages.model.js'

class message{

static async sendMessage(req,res){
try{
const { names,email,message } = req.body;
const newMessage =new messageModel({ names,email,message });
await newMessage.save();
res.status(200).json({
    message: "message sent",
    data:newMessage
})
}catch(error){
res.status(400).json({
    error:error
})
}}
static async displayMessage(req,res){
    try {
        const allMessage = await messageModel.find();
        res.status(302).json({
            message: `all messages are:${allMessage.length}`,
            data: allMessage
        })
    } catch (error) {
        res.status(404).json({
            error: error
        })
    }
}
}

export default message

