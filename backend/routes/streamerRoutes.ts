import express, { Request, Response } from 'express'
import { Streamer } from '../models/streamerModel'

const router = express.Router()

// POST /streamers
router.post('/streamers', async (req: Request, res: Response) => {
  try {
    const { name, platform, description } = req.body

    const newStreamer = new Streamer({ name, platform, description })
    await newStreamer.save()

    res.status(201).json(newStreamer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit streamer' })
  }
})

// GET /streamers
router.get('/streamers', async (_req: Request, res: Response) => {
  try {
    const streamers = await Streamer.find()
    res.json(streamers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streamers' })
  }
})

// GET /streamers/:streamerId
router.get('/streamers/:streamerId', async (req: Request, res: Response) => {
  try {
    const streamer = await Streamer.findById(req.params.streamerId)
    if (!streamer) {
      return res.status(404).json({ error: 'Streamer not found' })
    }
    res.json(streamer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streamer' })
  }
})

export default router
