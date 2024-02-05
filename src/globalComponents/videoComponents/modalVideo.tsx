import React from 'react'
import { Modal, TouchableOpacity, StyleSheet, View, Button } from 'react-native'
import { VideoContent } from './videoContent'
import { LargeButton } from '../largeButton'
import { SCREEN_MARGIN_HORIZONTAL } from '../../assets/constants'
import { colors } from '../../assets/colors'
import { getHeightByRatio } from '../../assets/globalUtilityFunctionsAndConstants'
import { useVideoDetailsById } from '../../hooks/useVideoDetailsById'
import { useAppDispatch } from '../../navigation/hooks/useDispatch'
import { addPurchase } from '../../store/reducers/purchasedList'
import { useSelector } from 'react-redux'
import { AppStore } from '../../store/store'

interface Props {
  showModal: boolean
  setShowModal: (showModal: boolean) => void
  itemId: number
}

export const ModalVideo = ({
  showModal,
  itemId,
  setShowModal,
}: Props): JSX.Element => {
  const dispatch = useAppDispatch()
  const videoDetails = useVideoDetailsById({ videoId: itemId })
  const purchasedVideo = useSelector(
    (store: AppStore) => store.purchaseList.purchasedVideo,
  )

  // the price is fictional
  const price = videoDetails ? parseInt(String(videoDetails.id)[0]) : 0

  const onPressBuy = () => {
    dispatch(addPurchase({ purchasedVideoId: itemId, videoValue: price }))
  }

  const isBought = purchasedVideo.includes(itemId)

  return (
    <Modal
      visible={showModal}
      transparent={true}
      animationType="fade"
      presentationStyle={'overFullScreen'}
      onRequestClose={() => {
        setShowModal(!showModal)
      }}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={() => setShowModal(!showModal)}>
        <VideoContent videoId={itemId} />
        <View>
          {!isBought && (
            <LargeButton onPress={onPressBuy} label={`Buy for £${price}`} />
          )}
          <Button title="Exit" onPress={() => setShowModal(!showModal)} />
        </View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: colors.overlayBlack80,
    paddingHorizontal: SCREEN_MARGIN_HORIZONTAL,
    paddingVertical: getHeightByRatio(0.25),
  },
})
