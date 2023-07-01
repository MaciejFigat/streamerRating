import request from 'supertest'
import app from '../../src/server'
import { Streamer } from '../../models/streamerModel'
import { afterAll, beforeAll, describe, it, expect } from '@jest/globals'
import { setup, teardown } from '../setup/testSetup'

beforeAll(async () => {
  await setup(3002, 3003)
})

afterAll(done => {
  teardown(done)
}, 10000)

describe('GET /', () => {
  it('responds with API is running in test mode', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)

    expect(response.body).toEqual({ message: 'API is running in test mode' })
  })
})
