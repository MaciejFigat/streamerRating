import mongoose, { Document, Schema } from 'mongoose'
import { TPlatform } from '../consts'

interface IStreamer extends Document {
  name: string
  pictureUrl: string
  platform: TPlatform
  description: string
  upvotes: number
  downvotes: number
}

const streamerSchema = new Schema<IStreamer>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  platform: { type: String, required: true },
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 }
})

export const Streamer = mongoose.model<IStreamer>('Streamer', streamerSchema)
