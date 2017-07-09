import 'app/header.styles'
import templateUrl from 'app/header.template'

const controller =
  class FtHeaderController {
    constructor ($log, gameService) {
      'ngInject'
      this.service = gameService
      $log.log('ft-header is a go')
    }

    get total () {
      return this.service.total
    }
  }

export const ftHeader = {
  controller,
  templateUrl,
  controllerAs: 'header'
}
