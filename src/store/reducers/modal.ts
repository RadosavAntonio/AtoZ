import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../types/modal'

const initialState: UserData = {
  username: '',
}

export const userSlice = createSlice({
  name: '_user',
  initialState: initialState,
  reducers: {
    updateUserName: (state, { payload }) => ({
      ...state,
      username: payload,
    }),
  },
})

export const userReducer = userSlice.reducer
export const { updateUserName } = userSlice.actions
