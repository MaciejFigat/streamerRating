import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../config/db'
import { initRoutes } from '../routes/streamerRoutes'
import colors from 'colors'
import cors from 'cors'
import { Server } from 'socket.io'
import http from 'http'

// Connect to MongoDB
dotenv.config()

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
) {
  connectDB()
}

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 5000

const httpServer = http.createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: '*'
  }
})

app.use('/streamers', initRoutes(io))

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send(colors.yellow.underline('API is running in production mode'))
  })
} else if (process.env.NODE_ENV === 'development') {
  app.get('/', (req, res) => {
    res.json({ message: 'API is running' })
    console.log(colors.green.underline('API is running in development mode'))
  })
} else if (process.env.NODE_ENV === 'test') {
  app.get('/', (req, res) => {
    res.json({ message: 'API is running in test mode' })
    console.log(colors.green.underline('API is running in test mode'))
  })
}
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  }
)

if (process.env.NODE_ENV !== 'test') {
  httpServer.listen(PORT, () => {
    console.log(
      colors.yellow.bgCyan.bold(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT} ${process.env.NODE_ENV}`
      )
    )
  })
}

io.on('connection', socket => {
  console.log('New client connected')
  socket.on('disconnect', () => console.log('Client disconnected'))
})

export default app
