import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppNavigationParams } from './navigation'
import { AuthNavigation } from './components/authNavigation'
import { MainNavigation } from './components/mainNavigator'
import { fetchUserData } from '../store/thunk/user'
import { useAppDispatch } from './hooks/useDispatch'
import { AppStore } from '../store/store'

export const AppStack = createNativeStackNavigator<AppNavigationParams>()

export const RootNavigation = memo(() => {
  const user = useSelector((store: AppStore) => store.user)

  return user.isLoggedIn ? <MainNavigation /> : <AuthNavigation />
})
