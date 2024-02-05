import { Alert } from 'react-native'
import { showDeleteAccountConfirmationAlert, showLogoutAlert } from './profile'

describe('showDeleteAccountConfirmationAlert', () => {
  it('should call the deleteAccount function when the "Delete" button is pressed', () => {
    const deleteAccount = jest.fn()
    jest.spyOn(Alert, 'alert').mockImplementation((title, message, buttons) => {
      buttons[0].onPress()
    })

    showDeleteAccountConfirmationAlert({ deleteAccount })

    expect(deleteAccount).toHaveBeenCalled()
  })
})

describe('showLogoutAlert', () => {
  it('should call the logout function when the "Log out" button is pressed', () => {
    const logout = jest.fn()
    jest.spyOn(Alert, 'alert').mockImplementation((title, message, buttons) => {
      buttons[0].onPress()
    })

    showLogoutAlert({ logout })

    expect(logout).toHaveBeenCalled()
  })
})
