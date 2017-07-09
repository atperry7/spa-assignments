import { SettingsService } from 'settings/settings.service'
import { ftSettings } from 'settings/settings.component'
import { defaultSettings } from 'settings/settings.constants'
import { config } from 'settings/settings.config'

export default ng
  .module('ft.settings', [])
  .service('settingsService', SettingsService)
  .component('ftSettings', ftSettings)
  .constant('defaultSettings', defaultSettings)
  .config(config)
  .name
