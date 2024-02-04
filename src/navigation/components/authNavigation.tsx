import { colors } from '../../assets/colors'
import { Login } from '../../screen/login/login'
import { Register } from '../../screen/login/register'
import { Screen } from '../navigation'
import { AppStack } from '../rootNavigation'

export const AuthNavigation = (): JSX.Element => {
  return (
    <AppStack.Navigator
      initialRouteName={Screen.LOGIN}
      screenOptions={{
        headerShown: false,
        navigationBarColor: colors.offBlack, // for android bar
        header: () => null, // for customize the header
        gestureEnabled: false, // very important to now allow uer to navigate uncontrolled
      }}>
      <AppStack.Screen name={Screen.LOGIN} component={Login} />
      <AppStack.Screen name={Screen.REGISTER} component={Register} />
    </AppStack.Navigator>
  )
}
