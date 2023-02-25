import express from 'express';
import messageController from '../controllers/message.controllers.js'

const router = express.Router();

router.post('/', messageController.sendMessage)
router.get('/', messageController.displayMessage)

export default router
