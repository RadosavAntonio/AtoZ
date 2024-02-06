export enum Screen {
  HOME = 'Home',
  PROFILE = 'Profile',
  MY_VIDEOS = 'My Videos',
  LOGIN = 'Login',
  REGISTER = 'Register',
  REGISTER_IMAGE = 'Register Image',
}

export type AppNavigationParams = {
  [Screen.HOME]: undefined // undefined means there are not props passed through navigation
  [Screen.PROFILE]: undefined
  [Screen.MY_VIDEOS]: undefined
  [Screen.LOGIN]: undefined
  [Screen.REGISTER]: undefined
  [Screen.REGISTER_IMAGE]: undefined
}

export enum HomeTabRoute {
  FEED = 'Feed',
  PROFILE = 'Profile',
  MY_VIDEOS = 'My videos',
}

export type HomeTabList = {
  [HomeTabRoute.FEED]: undefined // undefined means there are not props passed through navigation
  [HomeTabRoute.PROFILE]: undefined
  [HomeTabRoute.MY_VIDEOS]: undefined
}
