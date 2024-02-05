import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { useSelector } from 'react-redux'
import { VideoItem } from '../../store/types/videos'
import { AppStore } from '../../store/store'
import { ModalVideo } from './modalVideo'
import {
  getAdjustedHeight,
  getWidthByRatio,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../../assets/colors'

interface Props {
  item: VideoItem
}

export const VideoItemBox = ({ item }: Props): JSX.Element => {
  const onPress = () => {
    setShowModal(true)
  }

  const [showModal, setShowModal] = useState(false)

  const producerName = item.user.name

  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <ImageBackground source={{ uri: item.image }} style={styles.imageStyle}>
          <View style={styles.pill}>
            <Text style={styles.producerName}>
              {producerName.charAt(0).toUpperCase() + producerName.slice(1)}
            </Text>
          </View>
        </ImageBackground>
      </Pressable>

      <ModalVideo
        showModal={showModal}
        itemId={item.id}
        setShowModal={setShowModal}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    overflow: 'hidden',
  },

  imageStyle: {
    height: getAdjustedHeight(250),
    alignItems: 'center',
    justifyContent: 'center',
    width: getWidthByRatio(1) * 0.4,
  },

  pill: {
    padding: 10,
    backgroundColor: colors.oceanEyesBlueLight,
    borderRadius: 100,
  },

  producerName: {
    textAlign: 'center',
  },
})
