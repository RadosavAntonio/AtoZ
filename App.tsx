import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

export const App = (): JSX.Element => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null)
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SafeAreaView>
          <Text>test</Text>
        </SafeAreaView>
      </PersistGate>
    </Provider>
  )
}
