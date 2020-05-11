import store from '../../config/store'
import {BrowserRouter as Redirect} from 'react-router-dom';
  import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants'

export default function handleMovement(player) {

  
  function getNewPosition(oldPos, direction) {
    // eslint-disable-next-line
    switch(direction) {
      case 'WEST':
        return [ oldPos[0]-SPRITE_SIZE, oldPos[1] ]
      case 'EAST':
        return [ oldPos[0]+SPRITE_SIZE, oldPos[1] ]
      case 'NORTH':
        return [ oldPos[0], oldPos[1]-SPRITE_SIZE ]
      case 'SOUTH':
        return [ oldPos[0], oldPos[1]+SPRITE_SIZE ]
    }
  }

  function getSpriteLocation(direction, walkIndex) {
        // eslint-disable-next-line
    switch(direction) {
      case 'SOUTH':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*0}px`
      case 'EAST':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*1}px`
      case 'WEST':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*2}px`
      case 'NORTH':
        return `${SPRITE_SIZE*walkIndex}px ${SPRITE_SIZE*3}px`
    }
  }

  function getWalkIndex() {
    const walkIndex = store.getState().player.walkIndex
    return walkIndex >= 7 ? 0 : walkIndex + 1
  }

  function observeBoundaries(newPos) {
    return ( newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE ) &&
           ( newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE )
  }

  function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles
    const y = newPos[1] / SPRITE_SIZE
    const x = newPos[0] / SPRITE_SIZE
    const nextTile = tiles[y][x]
    newTileFunctions(nextTile)
    return (nextTile <= 149) || (nextTile>= 199)  
  }

  function dispatchMove(direction, newPos) {
    const walkIndex = getWalkIndex()
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: newPos,
        direction,
        walkIndex,
        spriteLocation: getSpriteLocation(direction, walkIndex),
      }
    })
  }

  function attemptMove(direction) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos, direction)

    if(observeBoundaries(newPos) && observeImpassable(oldPos, newPos) )
      dispatchMove(direction, newPos)
    else 
      {  
        const edgeOfTheWorld = true;    
        console.log("You cannot proceed!")
        return edgeOfTheWorld
        //store state of this bool in the store for global use later
      }
  }
  //===================USE COMMANDS==========================================================================
  function attemptUse(oldPos) {
    if (oldPos )
      return alert("Opened Chest") 
  }
  function newTileFunctions(nextTile) {
    if (nextTile === 109) 
      console.log("You found a chest!")
    
    if (nextTile === 112) 
    transitionToTown();

    if (nextTile === 205) 
    transitionToWorld();

    if (nextTile === 110) 
    transitionToCave();    
  }

  function transitionToTown() {
    window.location = "/town";
  }

  function transitionToWorld() {
    window.location = "/"
  }
  function transitionToCave() {
    window.location = "/cave";
  }
  // function beginBattle(oldPos) {
  //   if (BattleMenuDisplay)
  //     return alert("beginning battle")
//       assignBlackTile()
  // }
//===================movement directions=====================================================================
  function handleKeyDown(e) {
    e.preventDefault()
    
    switch(e.keyCode) {
      case 37:
        return attemptMove('WEST')

      case 38:
        return attemptMove('NORTH')

      case 39:
        return attemptMove('EAST')

      case 40:
        return attemptMove('SOUTH')

// //=======================USE TILES=============================================================

        case 85:
        return attemptUse("USE");

        // case 13:
        // return beginBattle(BattleMenuDisplay)

        default:
        console.log(e.keyCode)
    }
  }
  
  window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
  })
//======================Use Global Tile Handler======================================================================

  return player
}