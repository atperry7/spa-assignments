export class AppService {

  constructor ($interval, localStorageService, $log) {
    'ngInject'
    this.localStorageService = localStorageService
    this.$log = $log
    this.$interval = $interval
  }

  intervals = []
  initialLoad = false
  currentUser = ''

  state = {
    login: 0,
    amount: 1,
    total: 0,
    base: {
      costOfMultiplier: 10,
      costOfAutoClicker: 10,
      multiplier: 1.2,
      autoClickerTotal: 0
    }
  }

  defaultState = {
    login: 0,
    amount: 1,
    total: 0,
    base: {
      costOfMultiplier: 10,
      costOfAutoClicker: 10,
      multiplier: 1.2,
      autoClickerTotal: 0
    }
  }

  resetButtonCurrentTotal = 0

  init() {
    this.currentUser = this.localStorageService.get('currentUser')
    this.state = this.localStorageService.get(this.currentUser + 'State')
    if (this.state === undefined || this.state === null) {
      this.state = this.defaultState
      this.state.login += 1
    } else {
      this.state.login += 1
      this.resetButtonCurrentTotal = this.state.total
      for (var i = 0; i < this.state.base.autoClickerTotal; i++) {
        this.intervals.push(this.$interval(() => {
          this.increment()
        }, 1000))
      }
    }
  }

  saveState() {
    this.localStorageService.set(this.currentUser + 'State', this.state)
  }

  increment() {
    this.state.total += this.state.amount
    this.saveState()
  }

  multiply() {
    if (this.state.total >= this.state.base.costOfMultiplier) {
      this.state.amount *= this.state.base.multiplier
      this.state.total -= this.state.base.costOfMultiplier
      this.state.base.costOfMultiplier += this.state.base.costOfMultiplier / 2
      this.state.base.multiplier *= 1.5
      this.saveState()
    }
  }

  autoclick() {
    if (this.state.total >= this.state.base.costOfAutoClicker) {
      this.state.base.autoClickerTotal += 1
      this.state.total -= this.state.base.costOfAutoClicker
      this.state.base.costOfAutoClicker += this.state.base.costOfAutoClicker / 2
      this.intervals.push(this.$interval(() => {
        this.increment()
      }, 1000))
      this.saveState()
    }
  }

  reset() {
    this.state.total = this.defaultState.total
    this.state.amount = this.defaultState.amount
    this.state.base.multiplier = this.defaultState.base.multiplier
    this.state.base.costOfMultiplier = this.defaultState.base.costOfMultiplier
    this.state.base.autoClickerTotal = this.defaultState.base.autoClickerTotal
    this.state.base.costOfAutoClicker = this.defaultState.base.costOfAutoClicker
    for (var i = 0; i < this.intervals.length; i++) {
      this.$interval.cancel(this.intervals[i])
    }
  }

  resetButtonCheck() {
    return this.state.total === this.resetButtonCurrentTotal || this.state.total === this.defaultState.total
  }

  canAffordModifier () {
    return this.state.total < this.state.base.costOfMultiplier
  }

  canAffordAutoClick () {
    return this.state.total < this.state.base.costOfAutoClicker
  }

  currentUserLoggedIn() {
    if (this.localStorageService.get('successfulLogin') === false) {
      return true
    } else {
      if (this.initialLoad === false) {
        this.init()
        this.initialLoad = true
      }
      return false
    }
  }

  logOutCurrentUser() {
    this.initialLoad = false
    this.saveState()
    this.localStorageService.remove('currentUser')
    this.reset()
    this.localStorageService.set('successfulLogin', false)
  }
}

// switch (action) {
//   case 'TOTAL':
//     this.localStorageService.set('total', this.state.total)
//     break;
//   case 'MULTIPLIER':
//     this.localStorageService.set('multiplier', this.state.base.multiplier)
//     this.localStorageService.set('costOfMultiplier', this.state.base.costOfMultiplier)
//     this.localStorageService.set('amount', this.state.amount)
//     break;
//   case 'AUTOCLICKERTOTAL':
//     this.localStorageService.set('autoClickerTotal', this.state.base.autoClickerTotal)
//     this.localStorageService.set('costOfAutoClicker', this.state.base.costOfAutoClicker)
//     break;
// }
