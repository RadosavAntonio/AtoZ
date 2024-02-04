import React, { memo } from 'react'
import { HomeTabList, HomeTabRoute, Screen } from '../navigation'
import { Profile } from '../../screen/profile'
import { colors } from '../../assets/colors'
import { MyVideos } from '../../screen/myVideos'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  FontAwesome,
  fasPhotoFilm,
  fasStar,
  fasUser,
} from '../../assets/fontAwesome'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { Login } from '../../screen/login/login'
import { Register } from '../../screen/login/register'
import { AppStack } from '../rootNavigation'
import { Home } from '../../screen/home'

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
        name={HomeTabRoute.MY_VIDEOS}
        component={MyVideos}
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
        component={Home}
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

export const MainNavigation = (): JSX.Element => {
  return (
    <AppStack.Navigator
      initialRouteName={Screen.HOME}
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.offBlack, // for android bar
        header: () => null, // for customize the header
        gestureEnabled: false,
      }}>
      <AppStack.Screen name={Screen.HOME} component={TabsNavigation} />
      <AppStack.Screen name={Screen.PROFILE} component={Profile} />
      <AppStack.Screen name={Screen.MY_VIDEOS} component={MyVideos} />
    </AppStack.Navigator>
  )
}
