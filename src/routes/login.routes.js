import express from 'express';
import loginController from '../controllers/login.controllers.js'
import verifyUser from '../middlewares/verifyUser.middleware.js'

const router = express.Router();

router.get('/',verifyUser, loginController.checkUser)

export default router
