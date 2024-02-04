import React from 'react'
import {
  ActivityIndicator,
  Alert,
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
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
  disabled?: boolean
  isLoading?: boolean
}

export const LargeButton = ({
  label,
  onPress,
  children,
  containerStyle = styles.container,
  disabled = false,
  isLoading = false,
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
      disabled={disabled}
      style={containerStyle}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={{ transform: [{ scale }] }}>
        {label && !isLoading && !children && (
          <Text
            style={[
              styles.label,
              { color: disabled ? colors.white50 : colors.vogueWhite },
            ]}>
            {label}
          </Text>
        )}
        {!label && !isLoading && children && <>{children}</>}
        {isLoading && <ActivityIndicator />}
      </Animated.View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.caraPink,
    padding: getAdjustedWidth(SPACE[18]),
    borderRadius: BORDER_ROUND.circle,
  },

  label: {
    fontWeight: '700',
    fontSize: getAdjustedWidth(18),
    alignSelf: 'center',
  },
})
