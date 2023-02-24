import express from 'express';
import signup from '../controllers/singup.controllers.js'

const routes = express.Router();

routes.post('/', signup.signupUser)

export default routes