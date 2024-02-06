import React, { useEffect, useMemo, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../assets/colors'
import { VideoList } from '../globalComponents/videoComponents/videolist'
import { useAppDispatch } from '../navigation/hooks/useDispatch'
import { useSelector } from 'react-redux'
import { AppStore } from '../store/store'
import { fetchVideos } from '../store/thunk/fetchVideos'
import FuzzySearch from 'fuzzy-search'
import { Row } from '../globalComponents/row'
import { FontAwesome, fasMagnifyingGlass } from '../assets/fontAwesome'
import {
  BORDER_ROUND,
  SCREEN_MARGIN_HORIZONTAL,
  SPACE,
} from '../assets/constants'
import { result } from 'lodash'
import { fetchUserData } from '../store/thunk/user'

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const videosData = useSelector((store: AppStore) => store.video)
  const purchasedVideo = useSelector(
    (store: AppStore) => store.purchaseList.purchasedVideo,
  )
  const [results, setResults] = useState([])

  const videoDatabase = results.length ? results : videosData.videos

  const availableVideosIds = videoDatabase.reduce((acc, cur) => {
    if (!purchasedVideo.includes(cur.id)) {
      acc.push(cur.id)
    }
    return acc
  }, [])

  const displayLoader = videosData.videos.length < videosData.total_results

  // on a Pro level app this will be on a loader screen before Home
  useEffect(() => {
    !videosData.page && dispatch(fetchVideos())
  }, [])

  // this useEffect has ta role to load all the requested data when the app is loading. Is recommented to use it on a new screen with a loader. TO DO
  useEffect(() => {
    dispatch(fetchUserData())
  }, [])

  const onUserIdChangeText = (text: string) => {
    setResults(searcher.search(text) || [])
  }

  const searcher = useMemo(
    () =>
      new FuzzySearch(videosData.videos, ['user.name'], {
        caseSensitive: false,
      }),
    [videosData.videos],
  )

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Row style={styles.searchContainer}>
        <FontAwesome icon={fasMagnifyingGlass} />
        <TextInput
          placeholder="Search by author"
          onChangeText={onUserIdChangeText}
          style={styles.searchText}
        />
      </Row>

      <VideoList videoIds={availableVideosIds} displayLoader={displayLoader} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
  },

  searchContainer: {
    backgroundColor: colors.oceanEyesBlueLight,
    padding: SPACE[12],
    marginHorizontal: SCREEN_MARGIN_HORIZONTAL,
    borderRadius: BORDER_ROUND[12],
    marginBottom: SPACE[24],
  },

  searchText: {
    marginLeft: SPACE[12],
  },
})
