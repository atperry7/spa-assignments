import 'app/login.styles'
import templateUrl from 'app/login.template'

const controller =
  class FtLoginController {
    constructor ($log, loginService) {
      'ngInject'
      $log.log('ft-login is a go')
      this.service = loginService
    }

    successfulLogin () {
      return this.service.login()
    }

    login () {
      this.service.loginWithInfo(this.username, this.password)
    }

    join () {
      this.service.joinWithInfo(this.username, this.password)
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
