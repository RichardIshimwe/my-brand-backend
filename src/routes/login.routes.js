import express from 'express';
import loginController from '../controllers/login.controller.js'
import validateLoginInputs from '../middlewares/validateUser.middleware.js'

const router = express.Router();

router.get('/',validateLoginInputs, loginController.checkUser)

export default router
