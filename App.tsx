import React from 'react'
import { persistor, store } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { MainNavigation } from './src/navigation/components/mainNavigator'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RootNavigation } from './src/navigation/rootNavigation'

export const App = (): JSX.Element => {
  if (__DEV__) {
    import('./ReactotronConfig').then(() => null)
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <SafeAreaProvider>
            <RootNavigation />
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
