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

  init() {
    if (this.localStorageService.get('total') !== null) {
      this.state.total = this.localStorageService.get('total')
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
    this.state.total = 0
    this.state.base.costOfMultiplier = 10
    this.state.base.costOfAutoClicker = 100
    this.state.amount = 1
    this.state.base.autoClickerTotal = 0
    this.state.base.multiplier = 1.2
    for (var i = 0; i < this.state.intervals.length; i++) {
      this.$interval.cancel(this.state.intervals[i])
    }
    this.localStorageService.clearAll()
  }

  canAffordModifier () {
    return this.state.total < this.state.base.costOfMultiplier
  }

  canAffordAutoClick () {
    return this.state.total < this.state.base.costOfAutoClicker
  }

}
