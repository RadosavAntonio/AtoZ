import React, { useState } from 'react'
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
import { createUser } from '../../api/user'
import { Screen } from '../../navigation/navigation'
import { useAppDispatch } from '../../navigation/hooks/useDispatch'
import { setUserLogin } from '../../store/reducers/user'

export const Register = () => {
  const navigation = useAppNavigation()
  const dispatch = useAppDispatch()

  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const navigateToHome = () => navigation.navigate(Screen.HOME)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Hello and Welcome!</Text>
      <View style={styles.inputContainer}>
        <InputField
          keyboardType={'default'}
          label={'First & Last Name'}
          placeholder={'Enter your full name...'}
          onChangeText={value => setFullName(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          keyboardType={'email-address'}
          label={'Email'}
          placeholder={'Enter your email...'}
          onChangeText={value => setEmail(value)}
        />
      </View>
      <View style={styles.inputContainer}>
        <InputField
          keyboardType={'default'}
          secureTextEntry={true}
          label={'Password'}
          placeholder={'******'}
          onChangeText={value => setPassword(value)}
        />
      </View>
      {error.length > 0 && <Text style={styles.error}>{error}</Text>}
      {success.length > 0 && <Text style={styles.success}>{success}</Text>}
      <LargeButton
        isLoading={isLoading}
        label={'Create Account'}
        onPress={async () => {
          const user = await createUser(fullName, email, password)
          if (user.error) {
            setError(user.error)
          } else {
            setIsLoading(true)
            setError('')
            setSuccess('You have successfully registered')
            dispatch(setUserLogin())
            setTimeout(() => navigateToHome, 1000)
          }
        }}
        disabled={
          fullName.length <= 2 || email.length < 5 || password.length < 8
        }
      />
      <LargeButton
        disabled={isLoading}
        onPress={() => navigation.goBack()}
        containerStyle={styles.registrationButton}>
        <Text style={styles.infoText}>Back</Text>
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

  inputContainer: {
    marginBottom: SPACE[24],
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

  success: {
    fontSize: getAdjustedWidth(16),
    color: colors.zeldaGreen,
    marginBottom: getAdjustedHeight(24),
  },
})
