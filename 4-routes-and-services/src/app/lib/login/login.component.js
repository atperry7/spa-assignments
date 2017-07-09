import 'login/login.styles'
import templateUrl from 'login/login.template'

const controller =
  class LoginController {
    constructor ($log, loginService) {
      'ngInject'
      this.service = loginService
      $log.log('ft-login is a go')
    }

    successfulLogin () {
      return this.service.isAuthenticated()
    }

    login () {
      this.service.authenticate(this.username, this.password)
    }

    join () {

    }

  }

export const ftLogin = {
  controller,
  templateUrl,
  controllerAs: 'login',
  bindings: {
    username: '<',
    password: '<'
  }
}
