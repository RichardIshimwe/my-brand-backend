import express from 'express';
import blogControler from '../controllers/blog.controllers.js';
// console.log(blogControler.message);
const router = express.Router();

router.get('/', blogControler.displayBlogs);
router.post('/', blogControler.createBlog);
router.delete('/:id', blogControler.deleteBlog)

export default router 