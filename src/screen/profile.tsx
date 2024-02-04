import React from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../assets/colors'
import { LargeButton } from '../globalComponents/largeButton'
import { logout } from '../store/thunk/auth'
import {
  showDeleteAccountConfirmationAlert,
  showLogoutAlert,
} from '../utils/profile'
import { getAdjustedWidth } from '../assets/globalUtilityFunctionsAndConstants'
import { useAppDispatch } from '../navigation/hooks/useDispatch'
import { useAppNavigation } from '../navigation/hooks/useNavigation'
import auth from '@react-native-firebase/auth'
import { Screen } from '../navigation/navigation'
import { resetToInitialState } from '../store/reducers/user'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../assets/constants'

export const Profile = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const navigation = useAppNavigation()

  const deleteAccount = () => {
    const user = auth().currentUser

    if (user) {
      // Delete the user
      user
        .delete()
        .then(() => {
          dispatch(resetToInitialState())
          navigation.navigate(Screen.LOGIN)
        })
        .catch(error => {
          Alert.alert(
            'Oooops something went wrong. For more help please contact us at antonio@gmail.com',
          )
        })
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View />
      <View>
        <LargeButton
          onPress={() => showLogoutAlert({ logout: () => dispatch(logout()) })}
          label="Logout"
        />

        <LargeButton
          onPress={() =>
            showDeleteAccountConfirmationAlert({
              deleteAccount,
            })
          }
          containerStyle={{}}>
          <Text style={styles.deleteText}>Delete Account</Text>
        </LargeButton>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
    justifyContent: 'space-around',
    paddingHorizontal: SCREEN_MARGIN_HORIZONTAL,
  },

  deleteText: {
    fontWeight: '400',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(14),
    textAlign: 'center',
    marginTop: SPACE[32],
  },
})
