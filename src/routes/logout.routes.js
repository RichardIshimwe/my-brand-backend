import express from 'express'
import logout from '../controllers/logout.controllers.js';

const router = express.Router();
router.post('/', logout.logout);
export default router