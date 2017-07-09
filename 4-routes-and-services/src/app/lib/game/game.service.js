export class GameService {

  constructor ($interval, empty, settingsService) {
    'ngInject'
    this.$interval = $interval
    Object.assign(this, empty)
    this.settings = settingsService
  }

  get baseModifier () {
    return this.settings.modifier.amount
  }

  get totalModifier () {
    return Math.pow(this.baseModifier, this.modifiers)
  }

  get totalModifierCost () {
    return this.settings.modifier.cost
  }

  get canAffordModifier () {
    return this.total >= this.totalModifierCost
  }

  buyModifier () {
    if (this.canAffordModifier) {
      this.total -= this.totalModifierCost
      this.modifiers++
    }
  }

  get totalIncrement () {
    return this.settings.increment * this.totalModifier
  }

  increment () {
    this.total += this.totalIncrement
  }

  get totalAutoclickers () {
    return this.autoclickers
  }

  get totalAutoclickerInterval () {
    return this.settings.autoclicker.interval
  }

  get totalAutoclickerCost () {
    return this.settings.autoclicker.cost
  }

  get canAffordAutoclicker () {
    return this.total >= this.totalAutoclickerCost
  }

  buyAutoclicker () {
    if (this.canAffordAutoclicker) {
      this.total -= this.totalAutoclickerCost
      this.autoclickers++
      this.$interval(
        ::this.increment,
        this.totalAutoclickerInterval
      )
    }
  }
}
