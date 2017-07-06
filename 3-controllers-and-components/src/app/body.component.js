import 'app/body.styles'
import templateUrl from 'app/body.template'

const controller =
  class FtBodyController {
    constructor ($log, appService) {
      'ngInject'
      this.service = appService
      $log.log('ft-body is a go')
    }

    get amount () {
      return this.service.state.amount
    }

    get costOfMultiplier () {
      return this.service.state.base.costOfMultiplier
    }

    get costOfAutoClicker () {
      return this.service.state.base.costOfAutoClicker
    }

    get multiplier () {
      return this.service.state.base.multiplier
    }

    get autoClickerTotal () {
      return this.service.state.base.autoClickerTotal
    }

    click () {
      this.service.increment()
    }

    multiply () {
      this.service.multiply()
    }

    autoclick () {
      this.service.autoclick()
    }

    multiplierCostCheck () {
      return this.service.canAffordModifier()
    }

    autoClickCostCheck () {
      return this.service.canAffordAutoClick()
    }

    reset () {
      this.service.reset()
    }
  }

export const ftBody = {
  controller,
  templateUrl,
  controllerAs: 'body'
}
