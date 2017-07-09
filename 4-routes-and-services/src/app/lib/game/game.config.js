export const config =
  ($stateProvider) => {
    'ngInject'
    $stateProvider.state({
      name: 'game',
      url: '/game',
      data: { requiresAuth: true },
      component: 'ftGame',
      resolve: {
        
      }
    })
  }
