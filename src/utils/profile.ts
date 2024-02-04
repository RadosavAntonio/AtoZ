import { Alert } from 'react-native'

export const showDeleteAccountConfirmationAlert = ({ deleteAccount }) =>
  Alert.alert('Delete Account', 'We really don’t want to see you go. 😅', [
    {
      text: 'Delete',
      onPress: deleteAccount,
      style: 'destructive',
    },
    {
      text: 'Cancel',
      onPress: undefined,
    },
  ])

export const showLogoutAlert = ({ logout }) =>
  Alert.alert('Log Out', 'Grab a snack and come back', [
    {
      text: 'Log out',
      onPress: logout,
      style: 'destructive',
    },
    {
      text: 'Cancel',
      onPress: undefined,
    },
  ])
