export const config =
  ($logProvider, $locationProvider, $urlRouterProvider, localStorageServiceProvider) => {
    'ngInject'
    $logProvider.debugEnabled(true)
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/login')

    localStorageServiceProvider
      .setPrefix('clickerGame')
      .setStorageType('sessionStorage')
  }
