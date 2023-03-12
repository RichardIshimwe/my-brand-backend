import express from 'express';

import blogRoutes from './blog.routes.js'
import signup from './signup.routes.js'
import message from './messages.routes.js'
import login from './login.routes.js'
import verifyUser from '../middlewares/verifyUser.middleware.js';
import comment from './comment.routes.js'
import logout from './logout.routes.js';
import makeAdmin from './makeAdmin.routes.js'
import isAdmin from '../middlewares/isAdmin.middleware.js'
import blogControler from '../controllers/blog.controllers.js';

const routes = express.Router();
// routes.post('/test',(req, res) => res.status(200).json({message:"testing route"}));
routes.use('/signup', signup);
routes.get('/blogs/:id', blogControler.singleBlog)
routes.get('/blogs', blogControler.displayBlogs);
routes.use('/blogs', verifyUser, blogRoutes);
routes.use('/message', message);
// routes.use('/message', isAdmin , message);
routes.use('/login', login);
routes.use('/logout', logout);
routes.use('/comment', comment)
routes.use('/makeAdmin',isAdmin, makeAdmin)

routes.use((req, res) => {
   return res.status(404).json({ message: "page is not found" })
})

export default routes
