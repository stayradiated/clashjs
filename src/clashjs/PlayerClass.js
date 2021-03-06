import * as fx from './../lib/sound-effects'
import { generateBase32String as generateId } from './../lib/string-tools'

class PlayerClass {
  constructor(options) {
    this._id = generateId(8)
    this._playerInfo = options.info
    this._playerAI = options.default
  }

  getId() {
    return this._id
  }

  getInfo() {
    return this._playerInfo
  }

  getName() {
    return this._playerInfo.name
  }

  playLaser() {
    var index = this.getInfo().style % Object.keys(fx.lasers).length
    fx.lasers['laser' + index].play()
  }

  playExplosion() {
    var i = Math.round(Math.random() * 10) % 3
    fx.explosions['explode' + i].play()
  }

  execute(playerState, enemiesStates, gameEnvironment) {
    return this._playerAI(playerState, enemiesStates, gameEnvironment)
  }
}

export default PlayerClass
