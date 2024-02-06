import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppNavigationParams } from './navigation'
import { AuthNavigation } from './components/authNavigation'
import { MainNavigation } from './components/mainNavigator'
import { fetchUserData } from '../store/thunk/user'
import { useAppDispatch } from './hooks/useDispatch'

export const AppStack = createNativeStackNavigator<AppNavigationParams>()

export const RootNavigation = memo(() => {
  const dispatch = useAppDispatch()
  // this useEffect has ta role to load all the requested data when the app is loading. Is recommented to use it on a new screen with a loader. TO DO
  useEffect(() => {
    dispatch(fetchUserData())
  }, [])

  const userStatus = useSelector(state => state.user)
  return userStatus.isLoggedIn ? <MainNavigation /> : <AuthNavigation />
})
