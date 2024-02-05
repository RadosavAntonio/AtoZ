import React, { ReactNode } from 'react'
import {
  FlexAlignType,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'

interface Props {
  style?: StyleProp<ViewStyle>
  children: ReactNode
  marginHorizontal?: number
  marginVertical?: number
  alignItems?: FlexAlignType
}

export const Row = ({
  style,
  children,
  marginHorizontal = 0,
  marginVertical = 0,
  alignItems,
}: Props): JSX.Element => (
  <View
    style={[
      styles.container,
      { marginHorizontal, marginVertical, alignItems },
      style,
    ]}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
})
