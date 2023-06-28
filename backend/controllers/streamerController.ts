import { NextFunction, Request, Response } from 'express'
import { Streamer } from '../models/streamerModel'
import { VoteType } from '../consts'
import { Server } from 'socket.io'

// POST /streamers
export const createStreamerFactory = (io: Server) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { name, platform, description, pictureUrl, createdBy } = req.body

      const newStreamer = new Streamer({
        name,
        platform,
        description,
        pictureUrl,
        createdBy
      })
      const createdStreamer = await newStreamer.save()

      // Emit a 'createStreamer' event to all clients with the new streamer's ID
      io.sockets.emit('createStreamer', {
        // .toString() - change ObjectId - a class used by Mongoose for MongoDB document IDs
        streamerId: createdStreamer._id.toString()
      })
      console.log('createStreamer', {
        streamerId: createdStreamer._id.toString()
      })

      res.status(201).json(newStreamer)
    } catch (error) {
      res.status(500).json({ error: 'Failed to submit streamer' })
      console.log(error)
      next(error)
    }
  }
}

// GET /streamers
export const getAllStreamers = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const streamers = await Streamer.find()
    res.json(streamers)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch streamers' })
    next(error)
  }
}

// GET /streamers/:streamerId
export const getStreamerById = async (
  req: Request,
  res: Response,
  next: NextFunction
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
    next(error)
  }
}

// PUT /streamers/[streamerId]/vote
export const voteOnStreamerFactory = (io: Server) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const streamerId = req.params.streamerId
      const { voteType, userId } = req.body

      const streamer = await Streamer.findById(streamerId)
      if (!streamer) {
        res.status(404).json({ error: 'Streamer not found' })
        return
      }

      const alreadyUpvoted = streamer.upvotedBy.includes(userId)
      const alreadyDownvoted = streamer.downvotedBy.includes(userId)

      const addToVotes = (
        type: 'upvotes' | 'downvotes',
        voters: 'upvotedBy' | 'downvotedBy'
      ) => {
        streamer[type]++
        streamer[voters].push(userId)
      }

      const removeFromVotes = (
        type: 'upvotes' | 'downvotes',
        voters: 'upvotedBy' | 'downvotedBy'
      ) => {
        streamer[type]--
        streamer[voters] = streamer[voters].filter(id => id !== userId)
      }

      if (voteType === VoteType.UPVOTE) {
        if (alreadyUpvoted) {
          removeFromVotes('upvotes', 'upvotedBy')
        } else {
          addToVotes('upvotes', 'upvotedBy')
          if (alreadyDownvoted) {
            removeFromVotes('downvotes', 'downvotedBy')
          }
        }
      } else if (voteType === VoteType.DOWNVOTE) {
        if (alreadyDownvoted) {
          removeFromVotes('downvotes', 'downvotedBy')
        } else {
          addToVotes('downvotes', 'downvotedBy')
          if (alreadyUpvoted) {
            removeFromVotes('upvotes', 'upvotedBy')
          }
        }
      }

      await streamer.save()

      // Emit a 'vote' event to all clients
      io.sockets.emit('vote', { streamerId, voteType })
      console.log('vote', { streamerId, voteType })

      res.json(streamer)
    } catch (error) {
      res.status(500).json({ error: 'Failed to vote on streamer' })
      next(error)
    }
  }
}
