import { TPlatform } from './consts'

interface IStreamer {
  name: string
  pictureUrl: string
  platform: TPlatform
  description: string
  upvotes: number
  downvotes: number
}

export { IStreamer }
