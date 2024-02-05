import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../assets/colors'
import { VideoList } from '../globalComponents/videoComponents/videolist'
import { useSelector } from 'react-redux'
import { AppStore } from '../store/store'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../assets/constants'

export const MyVideos = (): JSX.Element => {
  const purchasedList = useSelector((store: AppStore) => store.purchaseList)

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Text
        style={
          styles.text
        }>{`Total value of videos £${purchasedList.valueOfVideos}`}</Text>
      <VideoList videoIds={purchasedList.purchasedVideo} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
  },

  text: {
    color: colors.vogueWhite,
    fontSize: 22,
    fontWeight: '600',
    marginHorizontal: SCREEN_MARGIN_HORIZONTAL,
    marginBottom: SPACE[24],
  },
})
