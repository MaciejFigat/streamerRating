import express from 'express'
import dotenv from 'dotenv'
import connectDB from '../config/db'
import { connectTestDB } from '../config/testDb'
import { initRoutes } from '../routes/streamerRoutes'
import colors from 'colors'
import cors from 'cors'
import { startServer } from './serverStarter'

// Connect to MongoDB
dotenv.config()

if (
  process.env.NODE_ENV === 'production' ||
  process.env.NODE_ENV === 'development'
) {
  connectDB()
}

const app = express()

const PORT = process.env.PORT || 3000

const ioPort = 3001
const { io } = startServer(PORT, ioPort)

app.use(express.json())

app.use('/streamers', initRoutes(io))

app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.get('/', (req, res) => {
    res.send(colors.yellow.underline('API is running in production mode'))
    console.log('production')
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

export default app
