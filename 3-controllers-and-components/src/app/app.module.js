import { AppService } from 'app/app.service'

import { ftApp } from 'app/app.component'
import { ftHeader } from 'app/header.component'
import { ftBody } from 'app/body.component'
import localStorage from 'angular-local-storage'

import { config } from 'app/app.config'

export default ng
  .module('ft.buttons', [localStorage])
  .service('appService', AppService)
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  .component('ftBody', ftBody)
  .config(config)
  .name
