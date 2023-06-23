import mongoose, { Connection } from 'mongoose'
// import colors from 'colors'

const connectDB = async (): Promise<Connection> => {
  const uri = process.env.MONGO_URI as string

  if (!uri) {
    throw new Error('Database connection string is not defined')
  }

  try {
    const conn = await mongoose.connect(uri)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    return conn.connection
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`.bgRed.bold)
      console.log('NODE_ENV', process.env.NODE_ENV)
      console.log('uri', uri)
    } else {
      console.error(`Unknown error occurred: ${error}`.bgRed.bold)
      console.log('NODE_ENV', process.env.NODE_ENV)
    }
    process.exit(1)
  }
}

export default connectDB
