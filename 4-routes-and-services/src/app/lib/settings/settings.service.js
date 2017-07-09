export class SettingsService {
  constructor (defaultSettings) {
    'ngInject'
    Object.assign(this, defaultSettings)
  }
}
