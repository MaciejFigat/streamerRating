import express from 'express'
import {
  createStreamer,
  getAllStreamers,
  getStreamerById
} from '../controllers/streamerController'

const router = express.Router()

router.post('/streamers', createStreamer)
router.get('/streamers', getAllStreamers)
router.get('/streamers/:streamerId', getStreamerById)

export default router
