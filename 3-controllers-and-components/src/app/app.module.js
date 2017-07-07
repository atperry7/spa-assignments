import { AppService } from 'app/app.service'
import { LoginService } from 'app/login.service'

import { ftApp } from 'app/app.component'
import { ftHeader } from 'app/header.component'
import { ftBody } from 'app/body.component'
import { ftLogin } from 'app/login.component'
import localStorage from 'angular-local-storage'
import ngRoute from 'angular-route'

import { config } from 'app/app.config'

export default ng
  .module('ft.buttons', [localStorage, ngRoute])
  .service('appService', AppService)
  .service('loginService', LoginService)
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  .component('ftBody', ftBody)
  .component('ftLogin', ftLogin)
  .config(config)
  .name
