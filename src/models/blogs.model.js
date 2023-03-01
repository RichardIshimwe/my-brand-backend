import mongoose from 'mongoose';

const blogsSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    comments: {
        type: Array
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})
const blog = mongoose.model('blogs', blogsSchema);

export default blog;
