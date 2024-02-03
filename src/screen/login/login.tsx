import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { InputField } from './components/inputField'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../../assets/constants'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { LargeButton } from '../../globalComponents/largeButton'

export const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
      <LargeButton label={'Login'} onPress={() => null} />
      <LargeButton
        onPress={() => null}
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
})
