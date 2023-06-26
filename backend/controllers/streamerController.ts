import { Request, Response } from 'express'
import { Streamer } from '../models/streamerModel'
import { VoteType } from '../consts'
import { Server } from 'socket.io'
// POST /streamers
export const createStreamer = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, platform, description, pictureUrl } = req.body

    const newStreamer = new Streamer({
      name,
      platform,
      description,
      pictureUrl
    })
    await newStreamer.save()

    res.status(201).json(newStreamer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit streamer' })
    console.log(error)
  }
}

// GET /streamers
export const getAllStreamers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const streamers = await Streamer.find()
    res.json(streamers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streamers' })
  }
}

// GET /streamers/:streamerId
export const getStreamerById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const streamer = await Streamer.findById(req.params.streamerId)
    if (!streamer) {
      res.status(404).json({ error: 'Streamer not found' })
      return
    }
    res.json(streamer)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streamer' })
  }
}

// PUT /streamers/[streamerId]/vote
export const voteOnStreamerFactory = (io: Server) => {
  return async (req: Request, res: Response): Promise<void> => {
    try {
      const streamerId = req.params.streamerId
      const { voteType } = req.body

      const streamer = await Streamer.findById(streamerId)
      if (!streamer) {
        res.status(404).json({ error: 'Streamer not found' })
        return
      }

      if (voteType === VoteType.UPVOTE) {
        streamer.upvotes++
      } else if (voteType === VoteType.DOWNVOTE) {
        streamer.downvotes++
      }

      await streamer.save()

      // Emit a 'vote' event to all clients
      io.sockets.emit('vote', { streamerId, voteType })
      console.log('vote', { streamerId, voteType })

      res.json(streamer)
    } catch (error) {
      res.status(500).json({ error: 'Failed to vote on streamer' })
    }
  }
}
// export const voteOnStreamer = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {
//     const streamerId = req.params.streamerId
//     const { voteType } = req.body

//     const streamer = await Streamer.findById(streamerId)
//     if (!streamer) {
//       res.status(404).json({ error: 'Streamer not found' })
//       return
//     }

//     if (voteType === VoteType.UPVOTE) {
//       streamer.upvotes++
//     } else if (voteType === VoteType.DOWNVOTE) {
//       streamer.downvotes++
//     }

//     await streamer.save()

//     res.json(streamer)
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to vote on streamer' })
//   }
// }
