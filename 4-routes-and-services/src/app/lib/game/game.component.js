import 'game/game.styles'
import templateUrl from 'game/game.template'

const controller =
  class FtGameController {
    constructor ($log, gameService) {
      'ngInject'
      this.service = gameService
      $log.log('ft-game is a go')
    }

    get baseModifier () {
      return this.service.baseModifier
    }

    get totalModifier () {
      return this.service.totalModifier
    }

    get canAffordModifier () {
      return this.service.canAffordModifier
    }

    get totalIncrement () {
      return this.service.totalIncrement
    }

    get totalAutoclickers () {
      return this.service.totalAutoclickers
    }

    get canAffordAutoclicker () {
      return this.service.canAffordAutoclicker
    }

    buyModifier () {
      this.service.buyModifier()
    }

    increment () {
      this.service.increment()
    }

    buyAutoclicker () {
      this.service.buyAutoclicker()
    }
  }

export const ftGame = {
  controller,
  templateUrl,
  controllerAs: 'game'
}
