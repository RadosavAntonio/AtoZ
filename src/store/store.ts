import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Reactotron from '../../ReactotronConfig'
import { UserData } from './types/user'
import { userReducer } from './reducers/user'
import { VideosData } from './types/videos'
import { videosReducer } from './reducers/videos'
import { purchasedListReducer } from './reducers/purchasedList'
import { PurchasedListData } from './types/purchasedList'

export type AppDispatch = typeof store.dispatch
export interface AppStore {
  user: UserData
  video: VideosData
  purchaseList: PurchasedListData
}

const rootReducer = combineReducers({
  user: userReducer,
  video: videosReducer,
  purchaseList: purchasedListReducer,
})

// Persistor configuration
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  // Persist user for easy log in process. Persist videos for performance reasons.
  // purchaseList is on persist store but a pro version request BE validation
  whitelist: ['user', 'video', 'purchaseList'],
  blacklist: [],
}
const persistedReducer = persistReducer(configuration, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Add the action that's causing the error
      },
    }),
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers().concat([Reactotron.createEnhancer!()])
  },
})

export const persistor = persistStore(store)
