import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { FontAwesome, fasPlus } from '../assets/fontAwesome'
// launchCamera is for adding an image by camera. I did left the details show that is possible
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getAdjustedWidth } from '../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../assets/colors'
import { BORDER_ROUND, SPACE } from '../assets/constants'
import { useSelector } from 'react-redux'
import { AppStore } from '../store/store'
import { images } from '../assets/images'

export const UserImageSelector = () => {
  const user = useSelector((store: AppStore) => store.user)

  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
    }
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode)
        // Handle the error, e.g., display an error message
      } else if (response.assets) {
        // Handle the selected image URI
        console.log('Image URI: ', response.assets)
      }
    })
  }

  return (
    <View>
      <Image source={images.userDefaultImage} style={styles.imageStyle} />
      <Pressable style={styles.plusContainer} onPress={openImagePicker}>
        <FontAwesome
          icon={fasPlus}
          style={styles.plus}
          size={getAdjustedWidth(32)}
        />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 220,
    width: 220,
    borderRadius: BORDER_ROUND.circle,
  },

  plusContainer: {
    backgroundColor: colors.caraPink,
    padding: SPACE[8],
    borderRadius: BORDER_ROUND.circle,
    position: 'absolute',
    bottom: 10,
    right: 30,
    borderWidth: 5,
    borderColor: colors.softBlack,
  },

  plus: {
    color: colors.vogueWhite,
  },
})
