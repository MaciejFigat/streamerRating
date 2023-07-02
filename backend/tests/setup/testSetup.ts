// import { startServer } from '../../src/serverStarter'
// import { Server } from 'socket.io'
// import { Server as HttpServer } from 'http'
import { closeTestDB, connectTestDB } from '../../config/testDb'

//TODO
// let serverInstance: { io: Server; httpServer: HttpServer } | undefined

// export const setup = async (port: number) => {
export const setup = async () => {
  await connectTestDB()
  // serverInstance = startServer(port)
}

export const teardown = async () => {
  await closeTestDB()
}
