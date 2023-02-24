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
    static async deleteBlog(req, res) {
        const id = req.params.id;
        console.log(req.params.id);
        try{
    const deleteItem = await blog.findOneAndDelete({_id: id})
    if(!deleteItem){
        res.send(400).json({
            message:`blog with id:${id} is not found`
        })
    }else{
        res.status(200).json({
            message: "blog deleted successful"
        })
    }
        }catch(error){
            res.status(400).json({
                error:error
            })
        }
    }

    static async editBlog(req,res){
try{
//    const id = req.params.id;
//    const { title,description,image } = req.body
//    const edit = findAndUpdate({_id: id,{title,description,image})
}catch(error){

}
    }
}

export default blogcontroler