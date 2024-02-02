export enum Screen {
  HOME = 'Home',
  PROFILE = 'Profile',
}

export type AppNavigationParams = {
  [Screen.HOME]: undefined
  [Screen.PROFILE]: undefined
}

export enum HomeTabRoute {
  FEED = 'Feed',
  PROFILE = 'Profile',
  FAVORITE = 'Favorite',
}

export type HomeTabList = {
  [HomeTabRoute.FEED]: undefined
  [HomeTabRoute.PROFILE]: undefined
  [HomeTabRoute.FAVORITE]: undefined
}
