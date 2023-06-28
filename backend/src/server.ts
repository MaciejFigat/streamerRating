import express from 'express'
import dotenv from 'dotenv'
import http from 'http'
import connectDB from '../config/db'
import { Server } from 'socket.io'
import { initRoutes } from '../routes/streamerRoutes'
import colors from 'colors'
import cors from 'cors'

// Connect to MongoDB
dotenv.config()
connectDB()

const app = express()
const server = http.createServer(app)

const io = new Server({
  cors: {
    origin: 'http://localhost:5173'
  }
})

const PORT = 3000

// Middleware
app.use(express.json())

// Routes

app.use('/streamers', initRoutes(io))

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
