import React from 'react'
import { SafeAreaView, Text } from 'react-native'

export const App = (): JSX.Element => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null)
  }

  return (
    <SafeAreaView>
      <Text>test</Text>
    </SafeAreaView>
  )
}
