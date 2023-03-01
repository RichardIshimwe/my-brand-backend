import express from 'express';
import blogControler from '../controllers/blog.controllers.js';
import isAdmin from '../middlewares/isAdmin.middleware.js'
import multer from 'multer';
import uploadImage from '../middlewares/uploadImage.middleware.js'
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.get('/', blogControler.displayBlogs);
router.delete('/:id', isAdmin, blogControler.deleteBlog)
router.put('/:id', isAdmin, blogControler.editBlog)
router.get('/:id', blogControler.singleBlog)
router.post('/', upload.single('image'), uploadImage, blogControler.createBlog);
// router.post('/', upload.single('image'), blogControler.createBlog);

export default router