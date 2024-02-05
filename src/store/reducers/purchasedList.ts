import { createSlice } from '@reduxjs/toolkit'
import { PurchasedListData } from '../types/purchasedList'

const initialState: PurchasedListData = {
  purchasedVideo: [],
  valueOfVideos: 0,
}

export const purchasedListSlice = createSlice({
  name: '_purchasedList',
  initialState: initialState,
  reducers: {
    addPurchase: (
      state,
      {
        payload,
      }: { payload: { purchasedVideoId: string; videoValue: number } },
    ) => ({
      ...state,
      purchasedVideo: [...state.purchasedVideo, payload.purchasedVideoId],
      valueOfVideos: state.valueOfVideos + payload.videoValue,
    }),
  },
})

export const purchasedListReducer = purchasedListSlice.reducer
export const { addPurchase } = purchasedListSlice.actions
