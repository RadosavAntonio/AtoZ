import React from 'react'
import { useSelector } from 'react-redux'
import { FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import { AppStore } from '../../store/store'
import { VideoItemBox } from './videoItemBox'
import {
  getAdjustedHeight,
  getWidthByRatio,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { fetchVideos } from '../../store/thunk/fetchVideos'
import { VideoItem } from '../../store/types/videos'
import { SCREEN_MARGIN_HORIZONTAL } from '../../assets/constants'
import { useAppDispatch } from '../../navigation/hooks/useDispatch'

interface Props {
  videoIds: number[]
  displayLoader?: boolean
}

export const VideoList = ({
  videoIds,
  displayLoader = false,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch()

  const videosData = useSelector((store: AppStore) => store.video)
  const availableVideosData = videosData.videos.filter((video: VideoItem) =>
    videoIds.includes(video.id),
  )

  return (
    <FlatList
      data={availableVideosData}
      keyExtractor={(item, index) => `${item.id}${index}`}
      renderItem={item => <VideoItemBox item={item.item} />}
      contentContainerStyle={styles.contentContainer}
      numColumns={2}
      bounces={false}
      columnWrapperStyle={styles.columnWrapper}
      maxToRenderPerBatch={8} // optimize Flatlist
      initialNumToRender={8} // optimize Flatlist
      onEndReachedThreshold={0.5} // when is scroll 50%
      onEndReached={() => {
        displayLoader && dispatch(fetchVideos())
      }}
      ListFooterComponent={() =>
        displayLoader && <ActivityIndicator size="large" />
      }
    />
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    width: getWidthByRatio(1),
    paddingHorizontal: SCREEN_MARGIN_HORIZONTAL,
  },

  columnWrapper: {
    justifyContent: 'space-around',
    marginBottom: getAdjustedHeight(18),
  },
})
