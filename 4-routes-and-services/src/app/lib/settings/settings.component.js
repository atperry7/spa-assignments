import 'settings/settings.styles'
import templateUrl from 'settings/settings.template'

const controller =
  class SettingsController {
    constructor ($log, settingsService) {
      'ngInject'
      this.service = settingsService
      $log.log('ft-settings is a go')
    }
  }

export const ftSettings = {
  controller,
  templateUrl,
  controllerAs: 'settings'
}
