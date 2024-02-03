import React, { useState } from 'react'
import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from '../../assets/colors'
import { InputField } from './components/inputField'
import { SCREEN_MARGIN_HORIZONTAL, SPACE } from '../../assets/constants'
import { getAdjustedWidth } from '../../assets/globalUtilityFunctionsAndConstants'
import { LargeButton } from '../../globalComponents/largeButton'
import { useAppNavigation } from '../../navigation/hooks/useNavigation'

export const Register = () => {
  const navigation = useAppNavigation()

  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

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
      <LargeButton label={'Create Account'} onPress={() => null} />
      <LargeButton
        onPress={async () => navigation.goBack()}
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
})
