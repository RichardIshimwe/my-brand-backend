import blog from '../models/blogs.model.js'
import dotenv from 'dotenv'
import cloudinary from 'cloudinary'
dotenv.config();
cloudinary.config({
   cloud_name: `${process.env.CLOUD_NAME}`,
   api_key: `${process.env.API_KEYD}`,
   api_secret: `${process.env.API_SECRET}`
});
class blogcontroler {
   
   static async singleBlog(req, res){
    try{
        const { id } = req.params
        const singleBlog = await blog.findOne({ _id:id });
        if(!singleBlog){
            return res.status(404).json({
                message:`The blog with id:${id} is not found`
            })
        }
        res.status(200).json({
            message:"the blog was found",
            data:singleBlog
        })
    }catch(error){
        res.status(500).json({error:error})
    }
   }

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
     
     const { author, title, description } = req.body;
     cloudinary.uploader.upload(req.file.path, async (result,err) =>{
       if(result){
        try {
            const newBlog = new blog({ author, title, description, image: result.url});
            await newBlog.save();
             res.status(200).json({
                 newBlog:newBlog,
             })
        } catch (error) {
            res.status(404).json({
                error:error});
        }
       }
     });
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
const { title,description } = req.body;
const { id } = req.params;
const _id = id;
const blogUpdated = await blog.findByIdAndUpdate(_id,{ title,description },{new: true});
res.status(200).json({
    message:"blog edited successful",
    data:blogUpdated,
    id:id
})
}catch(error){
      res.status(500).json({
        error:error
      })
}
    }
}

export default blogcontroler