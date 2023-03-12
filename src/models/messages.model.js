import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema({
    names: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    message: {
        type: String,
        required: true
    },
    check:{
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const messageModel = mongoose.model("messages", messageSchema);

export default messageModel
