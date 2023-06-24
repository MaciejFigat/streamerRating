import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  streamer: {
    name: '1',
    note: 'Twatch',
    platform: 'Twitch'
  },
  sortingOption: ''
}

const streamerSlice = createSlice({
  name: 'streamer',
  initialState: initialState,
  reducers: {}
})

export default streamerSlice.reducer
