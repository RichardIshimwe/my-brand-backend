import blog from '../models/blogs.model.js'
class blogcontroler {
    static async displayBlogs(req, res) {
        try {
            const blogs = await blog.find();
            res.status(200).json({
                message: `The blogs available are:${blogs.length}`,
                blogs: blogs
            })
        } catch (error) {
            res.status(400).json({
                error: error
            });
        }
    }

    static async createBlog(req, res) {
        const { title, description, image } = req.body;
        const newBlog = new blog({ title, description, image });
        const newblogs = { title, description, image };
        try {
            await newBlog.save();
            res.status(201).json({
                message: "blog created successful",
                createdBlog: newBlog
            })
        } catch (error) {
            res.status(400).json({
                data: error,
                message: "server error"
            })
        }
    }

}

export default blogcontroler