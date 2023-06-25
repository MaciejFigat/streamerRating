import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError
} from '@reduxjs/toolkit'
import { IStreamer } from '../../../interfaces'
import axios from 'axios'
import { streamerStatus } from '../../../consts'

interface ErrorPayload {
  error: string
}

interface StreamerState {
  streamers: IStreamer[]
  streamer: IStreamer | null
  status: streamerStatus
  error: string | null
}
const initialState: StreamerState = {
  streamers: [],
  streamer: null,
  status: streamerStatus.IDLE,
  error: null
}

export const createStreamer = createAsyncThunk<
  IStreamer,
  Omit<IStreamer, 'upvotes' | 'downvotes'>,
  { rejectValue: SerializedError }
>('streamer/createStreamer', async (streamerData, thunkAPI) => {
  try {
    const response = await axios.post('/api/streamers', streamerData)
    return response.data as IStreamer
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

export const fetchAllStreamers = createAsyncThunk(
  'streamer/fetchAllStreamers',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/streamers')
      return response.data as IStreamer[]
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error || 'Failed to fetch streamers'
      return thunkAPI.rejectWithValue({ error: errorMessage })
    }
  }
)
export const fetchStreamerById = createAsyncThunk(
  'streamer/fetchStreamerById',
  async (streamerId: string, thunkAPI) => {
    try {
      const response = await axios.get(`/api/streamers/${streamerId}`)
      return response.data as IStreamer
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Failed to fetch streamer' })
    }
  }
)

export const voteOnStreamer = createAsyncThunk(
  'streamer/voteOnStreamer',
  async (
    { streamerId, voteType }: { streamerId: string; voteType: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.put(`/api/streamers/${streamerId}/vote`, {
        voteType
      })
      return response.data as IStreamer
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: 'Failed to vote on streamer' })
    }
  }
)

const streamerSlice = createSlice({
  name: 'streamer',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createStreamer.pending, state => {
        state.status = streamerStatus.LOADING
      })
      .addCase(createStreamer.fulfilled, (state, action) => {
        state.status = streamerStatus.SUCCESS
        state.streamers.push(action.payload)
      })
      .addCase(createStreamer.rejected, (state, action) => {
        const payload = action.payload as ErrorPayload
        state.status = streamerStatus.FAILED
        state.error = payload?.error || 'Failed to fetch streamers'
      })
      .addCase(fetchAllStreamers.pending, state => {
        state.status = streamerStatus.LOADING
        state.error = null
      })
      .addCase(fetchAllStreamers.fulfilled, (state, action) => {
        state.status = streamerStatus.SUCCESS
        state.streamers = action.payload
        state.error = null
      })
      .addCase(fetchAllStreamers.rejected, (state, action) => {
        const payload = action.payload as ErrorPayload
        state.status = streamerStatus.FAILED
        state.error = payload?.error || 'Failed to fetch streamers'
      })
      .addCase(fetchStreamerById.pending, state => {
        state.status = streamerStatus.LOADING
        state.error = null
      })
      .addCase(fetchStreamerById.fulfilled, (state, action) => {
        state.status = streamerStatus.SUCCESS
        state.streamer = action.payload
        state.error = null
      })
      .addCase(fetchStreamerById.rejected, (state, action) => {
        const payload = action.payload as ErrorPayload
        state.status = streamerStatus.FAILED
        state.error = payload?.error || 'Failed to fetch streamer'
      })
      .addCase(voteOnStreamer.pending, state => {
        state.status = streamerStatus.LOADING
        state.error = null
      })
      .addCase(voteOnStreamer.fulfilled, (state, action) => {
        state.status = streamerStatus.SUCCESS
        state.streamer = action.payload
        state.error = null
      })
      .addCase(voteOnStreamer.rejected, (state, action) => {
        const payload = action.payload as ErrorPayload
        state.status = streamerStatus.FAILED
        state.error = payload?.error || 'Failed to vote on streamer'
      })
  }
})

export default streamerSlice.reducer
