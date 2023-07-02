import { startServer } from '../../src/serverStarter'
import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'
import { closeTestDB, connectTestDB } from '../../config/testDb'

let serverInstance: { io: Server; httpServer: HttpServer } | undefined

export const setup = async (port: number, ioPort: number) => {
  await connectTestDB()
  serverInstance = startServer(port, ioPort)
}

export const teardown = async () => {
  await closeTestDB()
  serverInstance?.io.close()
  serverInstance?.httpServer.close()
}
