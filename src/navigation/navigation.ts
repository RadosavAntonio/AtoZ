export enum Screen {
  HOME = 'Home',
  PROFILE = 'Profile',
  FAVORITE = 'Favorite',
  LOGIN = 'Login',
  REGISTER = 'Register',
}

export type AppNavigationParams = {
  [Screen.HOME]: undefined // undefined means there are not props passed through navigation
  [Screen.PROFILE]: undefined
  [Screen.FAVORITE]: undefined
  [Screen.LOGIN]: undefined
  [Screen.REGISTER]: undefined
}

export enum HomeTabRoute {
  FEED = 'Feed',
  PROFILE = 'Profile',
  FAVORITE = 'Favorite',
}

export type HomeTabList = {
  [HomeTabRoute.FEED]: undefined // undefined means there are not props passed through navigation
  [HomeTabRoute.PROFILE]: undefined
  [HomeTabRoute.FAVORITE]: undefined
}
