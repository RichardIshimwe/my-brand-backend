import express from 'express';
import blogControler from '../controllers/blog.controllers.js';
import isAdmin from '../middlewares/isAdmin.middleware.js'
import verifyUser from '../middlewares/isAdmin.middleware.js';

const router = express.Router();

router.get('/', blogControler.displayBlogs);
router.delete('/:id',verifyUser, isAdmin, blogControler.deleteBlog)
router.put('/:id',verifyUser, isAdmin, blogControler.editBlog)
router.get('/:id', blogControler.singleBlog)
router.post('/',verifyUser, blogControler.createBlog);
// router.post('/', upload.single('image'), blogControler.createBlog);

export default router