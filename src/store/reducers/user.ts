import { createSlice } from '@reduxjs/toolkit'
import { UserData } from '../types/user'

const initialState: UserData = {
  isLoggedIn: false,
  imageUrl: '',
}

export const userSlice = createSlice({
  name: '_user',
  initialState: initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      return {
        ...state,
        displayName: payload.displayName,
        email: payload.email,
        uid: payload.uid,
      }
    },
    setUserLogin: state => {
      return {
        ...state,
        ...{ isLoggedIn: true },
      }
    },
    resetToInitialState: () => {
      return initialState
    },
  },
})

export const userReducer = userSlice.reducer
export const { setUserData, setUserLogin, resetToInitialState } =
  userSlice.actions
