import express from 'express';
import signup from '../controllers/signup.controller.js';
import signupMiddleware from '../middlewares/checkSignup.middleware.js'
import verifyUser from '../middlewares/verifyUser.middleware.js';

const routes = express.Router();

routes.post('/',signupMiddleware,signup.signupUser)
routes.get('/',verifyUser,signup.allUsers)

export default routes