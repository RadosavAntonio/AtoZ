import { Dimensions, Platform } from 'react-native'
import { isString } from 'lodash'
import DeviceInfo from 'react-native-device-info'

// Platform -------------------------------------------------------------------
export const isIos = Platform.OS === 'ios'

// DIMENSIONS -------------------------------------------------------------------
const { width: screenWidth, height: screenHeight } = Dimensions.get('screen')

export const getWidthByRatio = (ratio: number) => screenWidth * ratio
export const getHeightByRatio = (ratio: number) => screenHeight * ratio
// on android window is without topBar and bottomBar, on iOS includes topBar
const { width: windowWidth, height: windowHeight } = Dimensions.get('window')
export const getWidthByWindowRatio = (ratio: number) => windowWidth * ratio
export const getHeightByWindowRatio = (ratio: number) => windowHeight * ratio

// design based on iPhone 12
export const getAdjustedWidth = (width: number, designScreenWidth = 375) =>
  isString(width) ? width : width * (screenWidth / designScreenWidth)
export const getAdjustedHeight = (height: number, designScreenHeight = 812) =>
  isString(height) ? height : height * (screenHeight / designScreenHeight)

// second approach ----------------------
const isSmall = screenWidth < 375 && !DeviceInfo.hasNotch()
const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330
  }
  return 350
}
export const horisontalScale = (size: number): number =>
  (screenWidth / guidelineBaseWidth()) * size

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550
  }
  if (screenWidth < 410) {
    return 620
  }
  return 680
}
export const verticalScale = (size: number): number =>
  (screenHeight / guidelineBaseHeight()) * size
