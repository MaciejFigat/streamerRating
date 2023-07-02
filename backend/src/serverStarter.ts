import http from 'http'
import { Server } from 'socket.io'
import { Socket } from 'socket.io-client'
import { io as SocketIOClient } from 'socket.io-client'
import app from './server'
import { Server as HttpServer } from 'http'

export interface ServerInstance {
  httpServer: HttpServer
  io: Server
  socketClient1: Socket
  socketClient2: Socket
}

export const startServer = (port: number | string): ServerInstance => {
  const httpServer = http.createServer(app)
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    }
  })

  const socketClient1 = SocketIOClient(`http://localhost:${port}`)
  const socketClient2 = SocketIOClient(`http://localhost:${port}`)

  httpServer.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })

  io.on('connection', socket => {
    console.log('New client connected')
    socket.on('disconnect', () => console.log('Client disconnected'))
  })

  return { httpServer, io, socketClient1, socketClient2 }
}
