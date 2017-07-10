export const config =
  ($stateProvider, $http, localStorageService) => {
    'ngInject'
    $stateProvider.state({
      name: 'game',
      url: '/game',
      data: { requiresAuth: true },
      component: 'ftGame',
      resolve: {
        getData: () => $http({
          method: 'GEt',
          url: 'http://localhost:8888/clickergame/user/validate',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'content-type': 'application/json'
          }
        }).then((response) => {
          this.$log.log(`Success going to and from server ${response.data}`)
        }, (response) => {
          this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
        })
      }
    })
  }
