import { TPlatform } from './consts'

interface IStreamer {
  _id?: string
  name: string
  pictureUrl: string
  platform: TPlatform
  description: string
  upvotes: number
  downvotes: number
  createdBy: string
}

export { IStreamer }
