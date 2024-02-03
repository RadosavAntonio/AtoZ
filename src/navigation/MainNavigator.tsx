import React, { memo } from 'react'
import {
  AppNavigationParams,
  HomeTabList,
  HomeTabRoute,
  Screen,
} from './navigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screen/home'
import { StyleSheet } from 'react-native'
import { Profile } from '../screen/profile'
import { colors } from '../assets/colors'
import { Favorite } from '../screen/favorite'
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { TabBar } from './components/tabBar'
import {
  FontAwesome,
  fasPhotoFilm,
  fasStar,
  fasUser,
} from '../assets/fontAwesome'
import { getAdjustedWidth } from '../assets/globalUtilityFunctionsAndConstants'
import { Login } from '../screen/login/login'
import { Register } from '../screen/login/register'

const AppTabs = createBottomTabNavigator<HomeTabList>()

export const TabsNavigation = memo((): JSX.Element => {
  return (
    <AppTabs.Navigator
      initialRouteName={HomeTabRoute.FEED}
      detachInactiveScreens // improve performance
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.offBlack,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: colors.caraPink,
        tabBarInactiveTintColor: colors.white50,
      }}>
      <AppTabs.Screen
        name={HomeTabRoute.FAVORITE}
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              icon={fasStar}
              color={color}
              size={getAdjustedWidth(24)}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name={HomeTabRoute.FEED}
        component={Login}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              icon={fasPhotoFilm}
              color={color}
              size={getAdjustedWidth(24)}
            />
          ),
        }}
      />
      <AppTabs.Screen
        name={HomeTabRoute.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome
              icon={fasUser}
              color={color}
              size={getAdjustedWidth(24)}
            />
          ),
        }}
      />
    </AppTabs.Navigator>
  )
})

const AppStack = createNativeStackNavigator<AppNavigationParams>()

export const MainNavigation = (): JSX.Element => {
  return (
    <AppStack.Navigator
      initialRouteName={Screen.HOME}
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.offBlack, // for android bar
        animation: 'fade_from_bottom',
        header: () => null, // for customize the header
        gestureEnabled: false,
      }}>
      <AppStack.Screen name={Screen.HOME} component={TabsNavigation} />
      <AppStack.Screen name={Screen.PROFILE} component={Profile} />
      <AppStack.Screen name={Screen.FAVORITE} component={Favorite} />
      <AppStack.Screen name={Screen.LOGIN} component={Login} />
      <AppStack.Screen name={Screen.REGISTER} component={Register} />
    </AppStack.Navigator>
  )
}
