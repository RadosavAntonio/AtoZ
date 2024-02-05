import { firebase } from '@react-native-firebase/auth'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setUserData } from '../reducers/user'

export const fetchUserData = createAsyncThunk<void, void>(
  '_user/fetchUserData',
  async (_payload, { dispatch }) => {
    const user = firebase.auth().currentUser
    dispatch(setUserData(user))
  },
)
