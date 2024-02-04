import { createAsyncThunk } from '@reduxjs/toolkit'
import { resetToInitialState } from '../reducers/user'
import { logOut } from '../../api/user'

export const logout = createAsyncThunk<void, void>(
  '_account/logout',
  async (_payload, { dispatch }) => {
    dispatch(resetToInitialState())
    await logOut()
  },
)
