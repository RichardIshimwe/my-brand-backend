import blog from '../models/blogs.model.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import cloudinary from 'cloudinary'
import response from '../utils/response.util.js'

class blogcontroler {

    static async singleBlog(req, res) {
        try {
            const { id } = req.params
            const singleBlog = await blog.findOne({ _id: id });
            if (!singleBlog) {
                return response.error(res, 404, `The blog with id:${id} is not found`)
            }
            response.success(res, 200, "The blog was found", singleBlog);
        } catch (error) {
            return response.error(res, 500, error)
        }
    }

    static async displayBlogs(req, res) {
        try {
            const blogs = await blog.find();
            response.success(res, 200, `All blogs available are:${blogs.length}`, blogs)
        } catch (error) {
            return response(res, 500, error);
        }
    }

    static async createBlog(req, res) {
        const { token } = req.cookies;
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const { username } = decoded;
        const { image } = req.cookies
        try {
            const { title, description } = req.body
            const blogs = await blog.find();
            const id = blogs.length;
                
                const newBlog = await blog.create({ id, author: username, title, description, image })
                response.success(res, 200, "blog created successfuly", newBlog)

        } catch (error) {
            console.log(error)
            return response.error(res, 500, "internal server error")
        }
    }
    static async deleteBlog(req, res) {
        const id = req.params.id;
        try {
            const deleteItem = await blog.findOneAndDelete({ _id: id })
            if (!deleteItem) {
                return response.error(res, 400, `blog with id:${id} is not found`)
            }
            response.success(res, 200, "blog deleted successful")
        } catch (error) {
            return response.error(res, 500, error);
        }
    }

    static async editBlog(req, res) {
        try {
            const { title, description } = req.body;
            const { id } = req.params;
            const blogUpdated = await blog.findByIdAndUpdate({ _id: id }, { title, description }, { new: true });
            if (!blogUpdated) {
                return response.error(res, 400, `the blog with id:${id} is not found.`)
            }
            response.success(res, 200, "blog edited successful", blogUpdated);
        } catch (error) {
            return response.error(res, 500, error)
        }
    }
}

export default blogcontroler