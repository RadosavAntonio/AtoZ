import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../assets/colors'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../../assets/constants'
import { UserImageSelector } from '../../globalComponents/userImageSelector'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { LargeButton } from '../../globalComponents/largeButton'
import { useAppDispatch } from '../../navigation/hooks/useDispatch'
import { useAppNavigation } from '../../navigation/hooks/useNavigation'
import { Screen } from '../../navigation/navigation'
import { setUserLogin } from '../../store/reducers/user'
import { useSelector } from 'react-redux'
import { AppStore } from '../../store/store'

export const RegisterImage = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const user = useSelector((store: AppStore) => store.user)

  const onButtonPress = () => {
    dispatch(setUserLogin())
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Profile Image</Text>
      <UserImageSelector />
      <View style={styles.buttonContainer}>
        <LargeButton
          label={'Add profile image'}
          onPress={onButtonPress}
          disabled={!user.imageUrl}
        />
        <LargeButton
          onPress={onButtonPress}
          containerStyle={styles.registrationButton}>
          <Text style={styles.infoText}>Continuer without an image</Text>
        </LargeButton>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
    paddingHorizontal: SCREEN_MARGIN_HORIZONTAL,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    marginTop: SPACE[64],
  },

  header: {
    fontWeight: '700',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(22),
    marginBottom: SPACE[32],
  },

  registrationButton: {
    alignItems: 'center',
    marginTop: SPACE[24],
  },

  infoText: {
    fontWeight: '400',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(14),
  },
})
