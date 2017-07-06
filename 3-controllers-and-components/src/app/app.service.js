export class AppService {

  constructor ($interval, localStorageService, $log) {
    'ngInject'
    this.localStorageService = localStorageService
    this.$log = $log
    this.$interval = $interval

  }

  state = {
    amount: 1,
    total: 0,
    intervals: [],
    base: {
      costOfMultiplier: 10,
      costOfAutoClicker: 10,
      multiplier: 1.2,
      autoClickerTotal: 0
    }
  }

  defaultState = {
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
    if (this.localStorageService.get('total') !== null) {
      this.state.total = this.localStorageService.get('total')
      this.resetButtonCurrentTotal = this.localStorageService.get('total')
    }

    if (this.localStorageService.get('multiplier') !== null) {
      this.state.base.multiplier = this.localStorageService.get('multiplier')
    }

    if (this.localStorageService.get('costOfMultiplier') !== null) {
      this.state.base.costOfMultiplier = this.localStorageService.get('costOfMultiplier')
    }

    if (this.localStorageService.get('amount') !== null) {
      this.state.amount = this.localStorageService.get('amount')
    }

    if (this.localStorageService.get('autoClickerTotal') !== null) {
      this.state.base.costOfAutoClicker = this.localStorageService.get('costOfAutoClicker')
      this.state.base.autoClickerTotal = this.localStorageService.get('autoClickerTotal')
      for (var i = 0; i < this.state.base.autoClickerTotal; i++) {
        this.state.intervals.push(this.$interval(() => {
          this.increment()
        }, 1000))
      }
    }
  }

  saveState(action) {
    switch (action) {
      case 'TOTAL':
        this.localStorageService.set('total', this.state.total)
        break;
      case 'MULTIPLIER':
        this.localStorageService.set('multiplier', this.state.base.multiplier)
        this.localStorageService.set('costOfMultiplier', this.state.base.costOfMultiplier)
        this.localStorageService.set('amount', this.state.amount)
        break;
      case 'AUTOCLICKERTOTAL':
        this.localStorageService.set('autoClickerTotal', this.state.base.autoClickerTotal)
        this.localStorageService.set('costOfAutoClicker', this.state.base.costOfAutoClicker)
        break;
    }
  }

  increment() {
    this.state.total += this.state.amount
    this.saveState('TOTAL')
  }

  multiply() {
    if (this.state.total >= this.state.base.costOfMultiplier) {
      this.state.amount *= this.state.base.multiplier
      this.state.total -= this.state.base.costOfMultiplier
      this.state.base.costOfMultiplier += this.state.base.costOfMultiplier / 2
      this.state.base.multiplier *= 1.5
      this.saveState('MULTIPLIER')
    }
  }

  autoclick() {
    if (this.state.total >= this.state.base.costOfAutoClicker) {
      this.state.base.autoClickerTotal += 1
      this.state.total -= this.state.base.costOfAutoClicker
      this.state.base.costOfAutoClicker += this.state.base.costOfAutoClicker / 2
      this.state.intervals.push(this.$interval(() => {
        this.increment()
      }, 1000))
      this.saveState('AUTOCLICKERTOTAL')
    }
  }

  reset() {
    this.state.total = this.defaultState.total
    this.state.amount = this.defaultState.amount
    this.state.base.multiplier = this.defaultState.base.multiplier
    this.state.base.costOfMultiplier = this.defaultState.base.costOfMultiplier
    this.state.base.autoClickerTotal = this.defaultState.base.autoClickerTotal
    this.state.base.costOfAutoClicker = this.defaultState.base.costOfAutoClicker
    for (var i = 0; i < this.state.intervals.length; i++) {
      this.$interval.cancel(this.state.intervals[i])
    }
    this.localStorageService.clearAll()
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

}
