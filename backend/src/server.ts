import express from 'express'
import mongoose from 'mongoose'
import http from 'http'
import { Server, Socket } from 'socket.io'
import streamerRoutes from '../routes/streamerRoutes'
import { Streamer } from '../models/streamerModel'

const app = express()
const server = http.createServer(app)
const io = new Server(server)

const PORT = 3000

// Connect to MongoDB
mongoose.connect('mongodb://localhost/streamer-spotlight')

// Middleware
app.use(express.json())

// Routes
app.use(streamerRoutes)

// WebSocket
io.on('connection', (socket: Socket) => {
  console.log('A user connected')

  // Handle vote event
  socket.on('vote', async (data: { streamerId: string; voteType: string }) => {
    try {
      const { streamerId, voteType } = data
      const streamer = await Streamer.findById(streamerId)

      if (!streamer) {
        return
      }

      if (voteType === 'upvote') {
        streamer.upvotes += 1
      } else if (voteType === 'downvote') {
        streamer.downvotes += 1
      }

      await streamer.save()
      io.emit('voteUpdated', streamer)
    } catch (error) {
      console.error('Failed to update vote', error)
    }
  })

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

// Start the server
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
