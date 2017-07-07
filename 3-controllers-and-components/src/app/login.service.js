export class LoginService {

  constructor (localStorageService, $log) {
    'ngInject'
    this.localStorageService = localStorageService
    this.localStorageService.set('successfulLogin', false)
    this.$log = $log
  }

  userInfo = {}
  getUserInfo = {}

  login() {
    this.$log.log(this.localStorageService.keys())
    this.$log.log(this.localStorageService.get('currentUser'))
    return this.localStorageService.get('successfulLogin')
  }

  loginWithInfo(username, password) {
    this.$log.log(`${username} and the ${password}`)
    if(this.localStorageService.get(username) !== null) {
      this.getUserInfo = this.localStorageService.get(username)
      this.$log.log(`${this.getUserInfo.username} and ${this.getUserInfo.password}`)

      if (this.getUserInfo.username === username && this.getUserInfo.password === password
      && this.getUserInfo !== undefined) {
        this.localStorageService.set('successfulLogin', true)
        this.localStorageService.set('currentUser', username)
        this.$log.log('Successfully Logged In')
      }
    }
  }

  joinWithInfo(username, password) {
    if(this.localStorageService.get(username) === null) {
      this.userInfo = {username: username, password: password}
      this.localStorageService.set(username, this.userInfo)
      this.localStorageService.set('successfulLogin', true)
      this.localStorageService.set('currentUser', username)
      this.$log.log('Successfully Joined')
    }
  }

}
