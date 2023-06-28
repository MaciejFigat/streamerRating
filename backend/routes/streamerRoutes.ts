import express from 'express'
import {
  createStreamerFactory,
  getAllStreamers,
  getStreamerById,
  voteOnStreamerFactory
} from '../controllers/streamerController'

import { Server } from 'socket.io'

export const initRoutes = (io: Server) => {
  const router = express.Router()

  router.post('/', createStreamerFactory(io))
  router.get('/', getAllStreamers)
  router.get('/:streamerId', getStreamerById)

  router.put('/:streamerId/vote', voteOnStreamerFactory(io))

  return router
}
