import React, { useState } from 'react'
import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import { Row } from './row'
import { FontAwesome, fasMagnifyingGlass } from '../assets/fontAwesome'
import { colors } from '../assets/colors'
import { BORDER_ROUND, SPACE } from '../assets/constants'

type CustomTextInputProps = Omit<TextInputProps, 'style'>

interface Props extends CustomTextInputProps {
  placeholder?: string
  editable?: boolean
  onTextClear?: () => void
  onTouchEnd?: () => void
  onChangeText?: (text: string) => void
  defaultValue?: string
  onSubmitEditing?: () => void
  style?: StyleProp<ViewStyle>
}

export const SearchBar = (props: Props) => {
  const {
    placeholder,
    editable = true,
    onTouchEnd,
    onChangeText,
    defaultValue,
    onSubmitEditing,
    onTextClear,
    style,
  } = props

  const [text, setText] = useState<string>(defaultValue ?? '')

  return (
    <Row style={[styles.searchContainer, style]}>
      <View>
        <FontAwesome icon={fasMagnifyingGlass} />
      </View>
      <TextInput
        placeholderTextColor={colors.white50}
        placeholder={placeholder}
        multiline={false}
        underlineColorAndroid={colors.transparent}
        onChangeText={text => {
          onChangeText?.(text)
          setText(text)
        }}
        defaultValue={defaultValue}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={false}
        editable={editable}
        onTouchEnd={onTouchEnd}
        {...props}
        style={styles.textInput}
      />
      {(text.length > 0 || (defaultValue?.length ?? 0) > 0) && (
        <Pressable
          style={styles.closeIconContainer}
          onPress={() => {
            setText('')
            onTextClear?.()
          }}
        />
      )}
    </Row>
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    color: colors.vogueWhite,
    lineHeight: undefined,
    padding: 0,
  },
  searchIcon: {
    height: 24,
    width: 24,
    tintColor: colors.vogueWhite,
    marginRight: SPACE[12],
  },
  closeIconContainer: {
    marginLeft: 'auto',
  },
  searchContainer: {
    backgroundColor: colors.zeldaGreen,
    borderRadius: BORDER_ROUND[12],
    padding: SPACE[12],
    alignItems: 'center',
  },
})
