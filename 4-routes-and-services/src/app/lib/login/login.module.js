import { LoginService } from 'login/login.service'
import { ftLogin } from 'login/login.component'
import { config } from 'login/login.config'
import { run } from 'login/loginhook.run'

export default ng
  .module('ft.login', [])
  .service('loginService', LoginService)
  .component('ftLogin', ftLogin)
  .config(config)
  .run(run)
  .name
