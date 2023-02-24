import express from 'express';

import blogRoutes from './blog.routes.js'
import userRoutes from './user.routes.js'
import signup from './signup.routes.js'

const routes = express.Router();

routes.use('/signup', signup)
routes.use('/blogs', blogRoutes);
routes.use('/home', userRoutes);

export default routes
