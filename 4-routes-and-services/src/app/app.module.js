import ngLocalStorage from 'angular-local-storage'
import ngUiRouter from 'angular-ui-router'

import ftGame from 'game/game.module'
import ftSettings from 'settings/settings.module'
import ftLogin from 'login/login.module'

import { ftApp } from 'app/app.component'
import { ftHeader } from 'app/header.component'

import { config } from 'app/app.config'
import { run } from 'app/app.run'

export default ng
  .module('ft.buttons', [
    // external dependencies
    ngLocalStorage,
    ngUiRouter,
    // internal dependencies
    ftGame,
    ftSettings,
    ftLogin
  ])
  .component('ftApp', ftApp)
  .component('ftHeader', ftHeader)
  .config(config)
  .run(run)
  .name
