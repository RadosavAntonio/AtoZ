import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../assets/colors'

export const MyVideos = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>MY VIDEOS</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
  },
})
