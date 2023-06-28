import mongoose, { Document, Schema } from 'mongoose'
import { TPlatform } from '../consts'

interface IStreamer extends Document {
  name: string
  pictureUrl: string
  platform: TPlatform
  description: string
  upvotes: number
  downvotes: number
  upvotedBy: string[]
  downvotedBy: string[]
  createdBy: string
}

const streamerSchema = new Schema<IStreamer>({
  name: { type: String, required: true },
  pictureUrl: { type: String, required: true },
  platform: { type: String, required: true },
  description: { type: String, required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  upvotedBy: { type: [String], default: [] },
  downvotedBy: { type: [String], default: [] },
  createdBy: { type: String, required: true }
})

export const Streamer = mongoose.model<IStreamer>('Streamer', streamerSchema)
