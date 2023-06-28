import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface UserState {
  userId: string
}
const initialState: UserState = {
  userId: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    }
  }
})

export const { setUserId } = userSlice.actions
export default userSlice.reducer
