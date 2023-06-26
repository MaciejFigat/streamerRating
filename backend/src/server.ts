import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import connectDB from '../config/db'
// import { Server, Socket } from 'socket.io'
import { Server } from 'socket.io'
// import streamerRoutes from '../routes/streamerRoutes'
import { initRoutes } from '../routes/streamerRoutes'

// import { Streamer } from '../models/streamerModel'
import colors from 'colors'

// Connect to MongoDB
dotenv.config()
connectDB()

const app = express()
const server = http.createServer(app)
// const io = new Server(server, {
const io = new Server({
  cors: {
    origin: 'http://localhost:5173'
  }
})

const PORT = 3000

// Middleware
app.use(express.json())

// Routes
// app.use('/api/streamers', streamerRoutes)
app.use('/api/streamers', initRoutes(io))

const cors = require('cors')
app.use(cors())

io.listen(3001)
io.on('connection', socket => {
  console.log('New client connected')
  socket.on('disconnect', () => console.log('Client disconnected'))
})

// Start the server
server.listen(PORT, () => {
  console.log(colors.rainbow(`Server listening on port ${PORT}`))
})
