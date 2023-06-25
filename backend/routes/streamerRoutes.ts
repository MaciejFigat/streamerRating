import express from 'express'
import {
  createStreamer,
  getAllStreamers,
  getStreamerById,
  voteOnStreamer
} from '../controllers/streamerController'

const router = express.Router()

router.post('/', createStreamer)
router.get('/', getAllStreamers)
router.get('/:streamerId', getStreamerById)
router.put('/:streamerId/vote', voteOnStreamer)

export default router
