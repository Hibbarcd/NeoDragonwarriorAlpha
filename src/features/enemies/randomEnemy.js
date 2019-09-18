import store from '../../config/store'
import { ENEMY_SPRITE_SIZE } from '../../config/constants'

export default function handleEnemy(enemy) {

  function getNewEnemy(oldPos, typeSprite) {
    // eslint-disable-next-line
    switch(typeSprite) {
      case 'MANTIS':
        return [ oldPos[0]-ENEMY_SPRITE_SIZE, oldPos[1] ]
      case 'RED_SLIME':
        return [ oldPos[0]+ENEMY_SPRITE_SIZE, oldPos[1] ]
      case 'MOLEMAN':
        return [ oldPos[0], oldPos[1]-ENEMY_SPRITE_SIZE ]
      case 'EARMOUSE':
        return [ oldPos[0], oldPos[1]+ENEMY_SPRITE_SIZE ]
    }
  }

  function getSpriteLocation(typeSprite, enemyIndex) {
        // eslint-disable-next-line
    switch(typeSprite) {
      case 'MANTIS':
        return `${ENEMY_SPRITE_SIZE*enemyIndex}px ${ENEMY_SPRITE_SIZE*0}px`
      case 'RED_SLIME':
        return `${ENEMY_SPRITE_SIZE*enemyIndex}px ${ENEMY_SPRITE_SIZE*1}px`
      case 'MOLEMAN':
        return `${ENEMY_SPRITE_SIZE*enemyIndex}px ${ENEMY_SPRITE_SIZE*2}px`
      case 'EARMOUSE':
        return `${ENEMY_SPRITE_SIZE*enemyIndex}px ${ENEMY_SPRITE_SIZE*3}px`
    }
  }

  function getEnemyIndex() {
    const enemyIndex = store.getState().enemy.enemyIndex
    return enemyIndex >= 5 ? 0 : enemyIndex + 1
  }

  function dispatchEnemy(typeSprite, newPos) {
    const enemyIndex = getEnemyIndex()
    store.dispatch({
      type: 'RANDOM_ENEMY',
      payload: {
        position: newPos,
        typeSprite,
        enemyIndex,
        spriteLocation: getSpriteLocation(typeSprite, enemyIndex),
      }
    })
  }

  function displayEnemyTest(typeSprite) {
    const oldPos = store.getState().enemy.position
    const newPos = getNewEnemy(oldPos, typeSprite)
  

      dispatchEnemy(typeSprite, newPos)
  }

  function handleKeyDown(e) {
    e.preventDefault()
    
    switch(e.keyCode) {
      case 49:
        return displayEnemyTest('MANTIS')

      case 50:
        return displayEnemyTest('RED_SLIME')

      case 51:
        return displayEnemyTest('MOLEMAN')

      case 51:
        return displayEnemyTest('EARMOUSE')

      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })

  return enemy
}