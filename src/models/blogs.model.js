import mongoose from 'mongoose';

const blogsSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    }
})
const blog = mongoose.model('blogs',blogsSchema);

export default blog;

