export class AppService {

  constructor ($interval) {
    'ngInject'
  }

  amount = 1
  total = 0
  costOfMultiplier = 10
  costOfAutoClicker = 10
  multiplier = 1.2
  autoClickerTotal = 0

  increment() {
    this.total += this.amount
  }

  multiply() {
    if (this.total >= this.costOfMultiplier) {
      this.amount *= this.multiplier
      this.total -= this.costOfMultiplier
    }
  }

  autoclick() {
    if (this.total >= this.costOfAutoClicker) {
      this.autoClickerTotal += 1
      this.total -= this.costOfAutoClicker
      $interval(function() {
        increment()
      }, 1000)
    }
  }
}
