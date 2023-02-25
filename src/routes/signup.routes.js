import express from 'express';
import signup from '../controllers/signup.controllers.js';
import signupMiddleware from '../middlewares/checkSignup.middleware.js'

const routes = express.Router();

routes.post('/',signupMiddleware,signup.signupUser)
routes.get('/',signup.allUsers)

export default routes