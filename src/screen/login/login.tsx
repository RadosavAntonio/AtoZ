import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { InputField } from '../../globalComponents/inputField'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../../assets/constants'
import {
  getAdjustedHeight,
  getAdjustedWidth,
} from '../../assets/globalUtilityFunctionsAndConstants'
import { LargeButton } from '../../globalComponents/largeButton'
import { useAppNavigation } from '../../navigation/hooks/useNavigation'
import { Screen } from '../../navigation/navigation'
import { loginUser } from '../../api/user'
import { resetToInitialState, setUserLogin } from '../../store/reducers/user'
import { useAppDispatch } from '../../navigation/hooks/useDispatch'

export const Login = (): JSX.Element => {
  const navigation = useAppNavigation()
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(resetToInitialState())
  }, [])

  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [error, setError] = useState('')

  const navigateToRegister = () => navigation.navigate(Screen.REGISTER)
  const navigateToHome = () => navigation.navigate(Screen.HOME)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <InputField
        keyboardType={'email-address'}
        label={'Email'}
        placeholder={'Enter your email...'}
        onChangeText={value => setEmail(value)}
      />
      <View style={styles.passwordContainer}>
        <InputField
          secureTextEntry={true}
          label={'Password'}
          placeholder={'******'}
          onChangeText={value => setPassword(value)}
          keyboardType={'default'}
        />
      </View>
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      <LargeButton
        label={'Login'}
        onPress={async () => {
          const user = await loginUser(email, password)
          if (!user.status) {
            setError(user.error)
          } else {
            setError('')
            dispatch(setUserLogin())
            navigateToHome
          }
        }}
      />
      <LargeButton
        onPress={navigateToRegister}
        containerStyle={styles.registrationButton}>
        <Text style={styles.infoText}>Don't have an account?</Text>
      </LargeButton>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.softBlack,
    paddingHorizontal: SCREEN_MARGIN_HORIZONTAL,
    justifyContent: 'center',
  },

  registrationButton: {
    alignItems: 'center',
    marginTop: SPACE[24],
  },

  header: {
    fontWeight: '700',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(22),
    marginBottom: SPACE[32],
  },

  passwordContainer: {
    marginVertical: SPACE[24],
  },

  infoText: {
    fontWeight: '400',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(14),
  },

  error: {
    fontSize: getAdjustedWidth(16),
    color: colors.warningRed,
    marginBottom: getAdjustedHeight(24),
  },
})
