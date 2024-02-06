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
    setUserImage: (state, { payload }) => {
      return {
        ...state,
        imageUrl: payload,
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
export const { setUserData, setUserImage, setUserLogin, resetToInitialState } =
  userSlice.actions
