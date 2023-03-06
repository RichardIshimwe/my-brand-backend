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

const routes = express.Router();
routes.use('/signup', signup);
routes.use('/blogs', blogRoutes);
// routes.use('/blogs', verifyUser, blogRoutes);
routes.use('/message', message);
// routes.use('/message', verifyUser, message);(test purpose)
routes.use('/login', login);
routes.use('/logout', logout);
routes.use('/comment', comment)
// routes.use('/comment', verifyUser, comment)
routes.use('/makeAdmin', makeAdmin)
// routes.use('/makeAdmin',isAdmin, makeAdmin)

routes.use((req, res) => {
   return res.status(404).json({ message: "page not found" })
})

export default routes