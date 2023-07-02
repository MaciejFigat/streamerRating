import request from 'supertest'
import app from '../../src/server'
import { Streamer } from '../../models/streamerModel'
import { afterAll, beforeAll, describe, it, expect } from '@jest/globals'
import { setup, teardown } from '../setup/testSetup'
import { Types } from 'mongoose'

let streamerTestId: Types.ObjectId | null = null

beforeAll(async () => {
  await setup(3002, 3003)
})

afterAll(done => {
  teardown(done)
}, 3000)

describe('GET /', () => {
  it('responds with API is running in test mode', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)

    expect(response.body).toEqual({ message: 'API is running in test mode' })
  })
})

describe('POST /streamers', () => {
  it('creates a new user', async () => {
    const newStreamer = {
      name: 'Mason',
      platform: 'Twitch',
      description: 'No longer unfit. Perfect son in law.',
      pictureUrl: 'not available, sadly',
      createdBy: 'randomId1112'
    }

    const response = await request(app).post('/streamers').send(newStreamer)

    streamerTestId = response.body._id

    expect(response.status).toBe(201)

    const streamer = await Streamer.findOne({
      description: newStreamer.description
    })

    expect(streamer).not.toBeNull()
  })
})
