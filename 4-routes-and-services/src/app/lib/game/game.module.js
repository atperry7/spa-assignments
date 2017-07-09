import { GameService } from 'game/game.service'
import { ftGame } from 'game/game.component'
import { empty } from 'game/game.constants'
import { config } from 'game/game.config'

export default ng
  .module('ft.game', [])
  .service('gameService', GameService)
  .component('ftGame', ftGame)
  .constant('empty', empty)
  .config(config)
  .name
