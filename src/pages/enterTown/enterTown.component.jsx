import React from 'react'
import Map from '../../features/map/map.component'
import PartyMenu from '../../features/partyStatusMenu/partyStatusMenu.component'
import Player from '../../features/player/index'
import Npc from '../../features/npc/npc.component'
//import { tiles } from '../../data/maps/TestWorldArea'
import { tiles } from '../../data/maps/Test_Town' // this is test town map
//import { tiles } from '../../data/maps/Test_dungeon'
//import { tiles } from '../../data/maps/Test_Castle'
import store from '../../config/store'
import GeneralInventoryMenu from '../../features/inventory-menu/inventory-menu.component'
import './enterTown.style.scss'


function Town(props) {
  store.dispatch({ type: 'ADD_TILES', payload: {
    //ES6 can use tiles:tiles or tiles, to mean the same thing
    tiles,
  }})
  return (
    <div className= 'townMap'>
      <div className='row-alignment'>
      <Map />
        {/* changing value of isActive from true to false conditionally renders styled css via prop */}
        <GeneralInventoryMenu isActive={true} >
            <p>Use keyboard Direction arrows to navigate the map. </p>
            <p>Many features to be added when time permits.</p> 
        </GeneralInventoryMenu>
      </div>
    <Player />
    <Npc />
    <PartyMenu />
    </div>
  )
}

export default Town