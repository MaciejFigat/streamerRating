import mongoose, { Connection } from 'mongoose'
import colors from 'colors'

const connectDB = async (): Promise<Connection> => {
  const uri = process.env.MONGO_URI as string

  if (!uri) {
    throw new Error('Database connection string is not defined')
  }

  try {
    const conn = await mongoose.connect(uri)

    console.log(
      colors.cyan.underline(`MongoDB Connected: ${conn.connection.host}`)
    )
    return conn.connection
  } catch (error) {
    if (error instanceof Error) {
      console.error(colors.bgRed.bold(`Error: ${error.message}`))
    } else {
      console.error(colors.bgRed.bold(`Unknown error occurred: ${error}`))
      console.log('NODE_ENV', process.env.NODE_ENV)
    }
    process.exit(1)
  }
}

export default connectDB
