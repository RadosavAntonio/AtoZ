import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Reactotron from '../../ReactotronConfig'
import { UserData } from './types/user'
import { userReducer } from './reducers/user'

export type AppDispatch = typeof store.dispatch
export interface AppStore {
  user: UserData
}

const rootReducer = combineReducers({
  user: userReducer,
})

// Persistor configuration
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  whitelist: ['user'], // Persist user for easy log in process
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
