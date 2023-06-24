import { configureStore, AnyAction } from '@reduxjs/toolkit'
import { Store } from 'redux'
import streamerReducer from '../reduxState/stateSlices/streamer/streamerSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    streamer: streamerReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppStore = Store<RootState, AnyAction>
