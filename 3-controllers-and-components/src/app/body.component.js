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
      return this.service.amount
    }

    get costOfMultiplier () {
      return this.service.costOfMultiplier
    }

    get costOfAutoClicker () {
      return this.service.costOfAutoClicker
    }

    get multiplier () {
      return this.service.multiplier
    }

    get autoClickerTotal () {
      return this.service.autoClickerTotal
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

    disabled () {
      return false
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
