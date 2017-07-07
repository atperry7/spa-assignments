export function config ($logProvider, localStorageServiceProvider) {
  'ngInject'
  $logProvider.debugEnabled(true)
  localStorageServiceProvider.setPrefix('clickerGame')
}
