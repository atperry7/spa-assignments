export const config =
  ($logProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    'ngInject'
    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/game')

    localStorageServiceProvider
      .setPrefix('clickerGame')
      .setStorageType('sessionStorage')
  }
