import React, { useState } from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import { getAdjustedWidth } from '../assets/globalUtilityFunctionsAndConstants'
import { colors } from '../assets/colors'

interface Props {
  onChangeText: (val: string) => void
  keyboardType: KeyboardTypeOptions
  secureTextEntry?: boolean
  label: string
  placeholder: string
}

export const InputField = ({
  onChangeText,
  keyboardType,
  secureTextEntry = false,
  label,
  placeholder,
}: Props): JSX.Element => {
  const [value, setValue] = useState('')
  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.white50}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val)
          onChangeText(val)
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  label: {
    fontWeight: '600',
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(12),
  },
  input: {
    paddingVertical: getAdjustedWidth(12),
    borderBottomWidth: 1,
    borderBottomColor: colors.caraPink,
    color: colors.vogueWhite,
    fontSize: getAdjustedWidth(18),
  },
})
