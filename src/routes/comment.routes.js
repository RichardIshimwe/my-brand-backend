import express from 'express'
import comment from '../controllers/comment.controller.js';

const router = express.Router();

router.post('/:id', comment.comment)
router.post('/', (req, res) => res.status(400).json({ message: "you must specify the blog to comment on.." }))

export default router