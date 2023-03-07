import express from 'express';
import blogControler from '../controllers/blog.controllers.js';
import isAdmin from '../middlewares/isAdmin.middleware.js'

const router = express.Router();


/** 
 * @swagger
 *   /blogs:
 *     get:
 *       summary: All blogs available
 *       tags: [Blogs]
 *       responses:
 *         "200":
 *           description: All blogs available
 *           contents:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/Blogs'
 *         "500":
 *           $ref: '#/components/responses/500'
 */

router.get('/', blogControler.displayBlogs);
router.delete('/:id', isAdmin, blogControler.deleteBlog)
router.put('/:id', isAdmin, blogControler.editBlog)
router.get('/:id', blogControler.singleBlog)
router.post('/', blogControler.createBlog);
// router.post('/', upload.single('image'), blogControler.createBlog);

export default router