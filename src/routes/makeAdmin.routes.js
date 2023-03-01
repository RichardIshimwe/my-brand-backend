import express from 'express'
import blogControler from '../controllers/makeAdmin.midlleware.js'

const router = express.Router();

router.post('/', blogControler.makeAdmin)

export default router