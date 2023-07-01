import http from 'http'
import { Server } from 'socket.io'
import app from './server'
import colors from 'colors'

export const startServer = (port: number | string, ioPort: number) => {
  const httpServer = http.createServer(app)
  const io = new Server(httpServer, {
    cors: {
      origin: 'http://localhost:5173'
    }
  })

  httpServer.listen(port, () => {
    console.log(colors.rainbow(`Server listening on port ${port}`))
  })

  io.listen(ioPort)
  io.on('connection', socket => {
    console.log('New client connected')
    socket.on('disconnect', () => console.log('Client disconnected'))
  })

  return { httpServer, io }
}
