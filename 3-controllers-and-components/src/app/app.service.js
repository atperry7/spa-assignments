export class AppService {

  constructor ($interval) {
    'ngInject'
  }

  amount = 1
  total = 0
  costOfMultiplier = 10
  costOfAutoClicker = 100
  multiplier = 1.2
  autoClickerTotal = 0

  increment() {
    this.total += this.amount
  }

  multiply() {
    if (this.total >= this.costOfMultiplier) {
      this.amount *= this.multiplier
      this.total -= this.costOfMultiplier
      this.costOfMultiplier += this.costOfMultiplier / 2
    }
  }

  autoclick() {
    if (this.total >= this.costOfAutoClicker) {
      this.autoClickerTotal += 1
      this.total -= this.costOfAutoClicker
      this.costOfAutoClicker += this.costOfAutoClicker / 2
    }
  }

  reset() {
    this.total = 0
    this.costOfMultiplier = 10
    this.costOfAutoClicker = 100
    this.amount = 1
    this.autoClickerTotal = 0
  }
}
