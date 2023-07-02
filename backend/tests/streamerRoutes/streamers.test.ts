import request from 'supertest'
import app from '../../src/server'
import { io as SocketIOClient } from 'socket.io-client'
import { Socket } from 'socket.io-client'
import { Streamer } from '../../models/streamerModel'
import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  it,
  expect
} from '@jest/globals'
import { setup, teardown } from '../setup/testSetup'
import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'
import http from 'http'
import { closeTestDB, connectTestDB } from '../../config/testDb'
import mongoose from 'mongoose'
import { VoteType } from '../../consts'

let serverInstance: { httpServer: HttpServer; io: Server }
let socketClient1: Socket
let socketClient2: Socket

const newStreamer = {
  name: 'Mason',
  platform: 'Twitch',
  description: 'No longer unfit. Perfect son in law.',
  pictureUrl: 'not available, sadly',
  createdBy: 'randomId1112'
}

beforeAll(async () => {
  //   await connectTestDB()
  setup()
  const httpServer = http.createServer(app)
  const io = new Server(httpServer, {
    cors: {
      origin: '*'
    }
  })

  serverInstance = { httpServer, io }

  httpServer.listen(5001, () => {
    console.log(`Server listening on port ${5001}`)
  })

  io.on('connection', socket => {
    console.log('New client connected')
    socket.on('disconnect', () => console.log('Client disconnected'))
  })

  socketClient1 = SocketIOClient('http://localhost:5001')
  socketClient2 = SocketIOClient('http://localhost:5001')
})

afterAll(async () => {
  serverInstance.httpServer.close(() => {
    console.log('HTTP server closed')
  })
  teardown()
  //   await closeTestDB()
}, 3000)

describe('GET /', () => {
  it('responds with API is running in test mode', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)

    expect(response.body).toEqual({ message: 'API is running in test mode' })
  })
})

describe('POST /streamers', () => {
  it('creates a new streamer', async () => {
    const response = await request(app).post('/streamers').send(newStreamer)

    expect(response.status).toBe(201)

    const streamer = await Streamer.findOne({
      description: newStreamer.description
    })

    expect(streamer).not.toBeNull()
  })

  it('should receive "Streamer created" message for each client', done => {
    const mockStreamerId = 'mock-streamer-id'
    const expectedResponses = 2
    let receivedResponses = 0

    // Listen for socket events
    socketClient1.on('streamerCreated', data => {
      expect(data.streamerId).toBe(mockStreamerId)
      receivedResponses++

      if (receivedResponses === expectedResponses) {
        done()
      }
    })

    socketClient2.on('streamerCreated', data => {
      expect(data.streamerId).toBe(mockStreamerId)
      receivedResponses++

      if (receivedResponses === expectedResponses) {
        done()
      }
    })

    // Emit socket event
    serverInstance.io.emit('streamerCreated', { streamerId: mockStreamerId })
  })
})

describe('GET /streamers/:streamerId', () => {
  it('returns the specified streamer', async () => {
    const createResponse = await request(app)
      .post('/streamers')
      .send(newStreamer)
    expect(createResponse.status).toBe(201)

    const createdStreamerId = createResponse.body._id

    const getResponse = await request(app).get(
      `/streamers/${createdStreamerId}`
    )

    expect(getResponse.status).toBe(200)
    expect(getResponse.body.name).toBe('Mason')

    // Clean up: delete the created streamer
    await Streamer.findByIdAndDelete(createdStreamerId)
  })

  it('returns 404 if streamer is not found', async () => {
    const nonExistentStreamerId = new mongoose.Types.ObjectId().toString()
    const response = await request(app).get(
      `/streamers/${nonExistentStreamerId}`
    )

    expect(response.status).toBe(404)
    expect(response.body.error).toBe('Streamer not found')
  })

  it('returns 500 if an error occurs', async () => {
    // Simulate an error
    const invalidStreamerId = 'invalid-id'

    const response = await request(app).get(`/streamers/${invalidStreamerId}`)

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Failed to fetch streamer')
  })
})

describe('PUT /streamers/:streamerId/vote', () => {
  let streamerId: string

  beforeEach(async () => {
    const response = await request(app).post('/streamers').send(newStreamer)

    streamerId = response.body._id
  })

  it('should successfully vote on a streamer', async () => {
    const response = await request(app)
      .put(`/streamers/${streamerId}/vote`)
      .send({
        voteType: VoteType.UPVOTE,
        userId: 'mock-user-id'
      })

    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty('upvotes', 1)
    expect(response.body.upvotedBy).toContain('mock-user-id')
  })
})

describe('Vote event emission', () => {
  it('should emit a vote event to all clients', done => {
    const expectedResponses = 2
    let receivedResponses = 0

    const mockStreamerId = 'mock-streamer-id'

    socketClient1.on('vote', data => {
      expect(data.streamerId).toBe(mockStreamerId)
      receivedResponses++

      if (receivedResponses === expectedResponses) {
        done()
      }
    })

    socketClient2.on('vote', data => {
      expect(data.streamerId).toBe(mockStreamerId)
      receivedResponses++

      if (receivedResponses === expectedResponses) {
        done()
      }
    })

    serverInstance.io.emit('vote', { streamerId: mockStreamerId })
  })
})
