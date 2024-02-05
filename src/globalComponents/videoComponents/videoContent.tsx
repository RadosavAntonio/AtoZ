import React from 'react'
import { View, StyleSheet, ActivityIndicator } from 'react-native'
import { useVideoDetailsById } from '../../hooks/useVideoDetailsById'
import Video from 'react-native-video'
import { BORDER_ROUND, SPACE } from '../../assets/constants'

interface Props {
  videoId: number
}

export const VideoContent = ({ videoId }: Props): JSX.Element => {
  const videoDetails = useVideoDetailsById({ videoId })

  return (
    <View style={styles.contentContainer}>
      <View style={styles.videoContainer}>
        {videoDetails ? (
          <Video
            source={{ uri: videoDetails.video_files[0].link }}
            style={{ aspectRatio: 16 / 9 }}
            resizeMode="contain"
            repeat
          />
        ) : (
          <ActivityIndicator />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: SPACE[32],
  },

  videoContainer: {
    borderRadius: BORDER_ROUND[18],
    overflow: 'hidden',
  },
})
