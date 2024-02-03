import React from 'react'
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native'
import { colors } from '../assets/colors'
import { getAdjustedWidth } from '../assets/globalUtilityFunctionsAndConstants'
import { BORDER_ROUND, SPACE } from '../assets/constants'

interface Props {
  label?: string
  children?: JSX.Element | JSX.Element
  onPress: () => {}
  containerStyle?: StyleProp<ViewStyle>
}

export const LargeButton = ({
  label,
  onPress,
  children,
  containerStyle = styles.container,
}: Props): JSX.Element => {
  const scale = new Animated.Value(1)

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.75,
      useNativeDriver: true,
    }).start()
  }

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  return (
    <Pressable
      onPress={onPress}
      style={containerStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {label ? <Text style={styles.label}>{label}</Text> : <>{children}</>}
      </Animated.View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.caraPink,
    padding: getAdjustedWidth(SPACE[12]),
    borderRadius: BORDER_ROUND.circle,
  },

  label: {
    fontWeight: '700',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(18),
    alignSelf: 'center',
  },
})
