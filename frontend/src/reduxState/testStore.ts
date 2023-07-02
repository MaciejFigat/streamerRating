import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import userReducer from './stateSlices/user/userSlice'
import streamerReducer from './stateSlices/streamer/streamerSlice'

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  streamerState: streamerReducer,
  user: userReducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
