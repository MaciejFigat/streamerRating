import mongoose, { Connection } from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import colors from 'colors'

let mongod: MongoMemoryServer

const connectTestDB = async (): Promise<Connection> => {
  mongod = await MongoMemoryServer.create()
  const uri = mongod.getUri()

  if (!uri) {
    throw new Error('Database connection string is not defined')
  }

  try {
    const conn = await mongoose.connect(uri)

    console.log(
      colors.cyan.underline(`TestDB Connected: ${conn.connection.host}`)
    )
    return conn.connection
  } catch (error) {
    if (error instanceof Error) {
      console.error(colors.bgRed.bold(`Error: ${error.message}`))
    } else {
      console.error(colors.bgRed.bold(`Unknown error occurred: ${error}`))
    }
    return Promise.reject(
      new Error(
        typeof error === 'string' ? error : 'An unknown error occurred.'
      )
    )
  }
}

const closeTestDB = async () => {
  await mongoose.connection.close()
  if (mongod) {
    await mongod.stop()
  }
}

export { connectTestDB, closeTestDB }
