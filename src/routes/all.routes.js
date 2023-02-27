import express from 'express';

import blogRoutes from './blog.routes.js'
import signup from './signup.routes.js'
import message from './messages.routes.js'
import login from './login.routes.js'
import verifyUser from '../middlewares/verifyUser.middleware.js';
import comment from './comment.routes.js'
import logout from './logout.routes.js';

const routes = express.Router();

routes.use('/signup', signup);
routes.use('/blogs', verifyUser, blogRoutes);
routes.use('/message', verifyUser, message);
routes.use('/login', login);
routes.use('/logout', logout);
routes.use('/comment', verifyUser, comment)
routes.use((req, res) => {
   return res.status(404).json({ message: "page not found" })
})

export default routes
