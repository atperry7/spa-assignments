export class LoginService {
  constructor ($q, localStorageService, $http, $log, $state) {
    'ngInject'
    this.$q = $q
    this.localStorageService = localStorageService
    this.$http = $http
    this.$log = $log
    this.$state = $state
  }

  /**
   * Returns true if the user is currently authenticated, else false
   */
  isAuthenticated () {
    return this.localStorageService.get('currentUser') !== null
  }

  /**
   * Fake authentication function that returns a promise that is either resolved or rejected.
   *
   * Given a username and password, checks that the username matches one of the known
   * usernames (this.usernames), and that the password matches 'password'.
   *
   * Delays 800ms to simulate an async REST API delay.
   */
  authenticate (username, password) {
    // checks if the username is one of the known usernames, and the password is 'password'

    let userObject = { username: username, password: password }
    // const checkCredentials = () => this.$q((resolve, reject) => {
    //   let validUsername = username === 'test'
    //   let validPassword = password === 'password'
    //
    //   return (validUsername && validPassword) ? resolve(username) : reject('Invalid username or password')
    // })

    this.$http({
      method: 'POST',
      url: 'http://localhost:8888/clickergame/user/validate',
      data: userObject,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'content-type': 'application/json'
      }
    }).then((response) => {
      if (response.data !== false) {
        this.localStorageService.set('currentUser', username)
        this.$state.go('game')
      }
      this.$log.log(`Success going to and from server ${response.data}`)
    }, (response) => {
      this.$log.log(`Success going to and from server, but returned an error ${response.status}`)
    })
  }

  /** Logs the current user out */
  logout () {
    this.localStorageService.clearAll()
  }
}
