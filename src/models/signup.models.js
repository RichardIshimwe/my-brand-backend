import mongoose from 'mongoose';

const signupSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unipue: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    admin: {
        type: Boolean
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

const signup = mongoose.model('signups', signupSchema);

export default signup