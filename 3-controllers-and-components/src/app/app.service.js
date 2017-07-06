export class AppService {

  constructor ($interval) {
    'ngInject'
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

  increment() {
    this.state.total += this.state.amount
  }

  multiply() {
    if (this.state.total >= this.state.base.costOfMultiplier) {
      this.state.amount *= this.state.base.multiplier
      this.state.total -= this.state.base.costOfMultiplier
      this.state.base.costOfMultiplier += this.state.base.costOfMultiplier / 2
    }
  }

  autoclick() {
    if (this.state.total >= this.state.base.costOfAutoClicker) {
      this.state.base.autoClickerTotal += 1
      this.state.total -= this.state.base.costOfAutoClicker
      this.state.base.costOfAutoClicker += this.state.base.costOfAutoClicker / 2
      this.state.intervals.push(this.$interval(() => {
        this.state.total += this.state.amount
      }, 1000))
    }
  }

  reset() {
    this.state.total = 0
    this.state.base.costOfMultiplier = 10
    this.state.base.costOfAutoClicker = 100
    this.state.amount = 1
    this.state.base.autoClickerTotal = 0
    for (var i = 0; i < this.state.intervals.length; i++) {
      this.$interval.cancel(this.state.intervals[i])
    }
  }

  canAffordModifier () {
    return this.state.total < this.state.base.costOfMultiplier
  }

  canAffordAutoClick () {
    return this.state.total < this.state.base.costOfAutoClicker
  }

}
