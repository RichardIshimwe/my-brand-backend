import express from 'express';

import blogRoutes from './blog.routes.js'
import signup from './signup.routes.js'
import message from './messages.routes.js'
import login from './login.routes.js'

const routes = express.Router();

routes.use('/signup', signup)
routes.use('/blogs', blogRoutes);
routes.use('/message', message);
routes.use('/login', login)

export default routes
