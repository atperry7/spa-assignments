export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'settings',
      url: '/settings',
      data: { requiresAuth: true },
      component: 'ftSettings'
    })
  }
