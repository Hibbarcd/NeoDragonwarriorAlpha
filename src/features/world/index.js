import React from 'react'
import Map from '../map/map.component'
import PartyMenu from '../partyStatusMenu/partyStatusMenu.component'
import Player from '../player'
import Npc from '../npc/npc.component'
import { tiles } from '../../data/maps/1' // this is actual world map
//import { tiles } from '../../data/maps/Test_Town' // this is test town map
//import { tiles } from '../../data/maps/Test_dungeon'
//import { tiles } from '../../data/maps/Test_Castle'
import store from '../../config/store'
import GeneralInventoryMenu from '../inventory-menu/inventory-menu.component'
import './style.css'


function World(props) {
  store.dispatch({ type: 'ADD_TILES', payload: {
    //ES6 can use tiles:tiles or tiles, to mean the same thing
    tiles,
  }})
  return (
    <div className= 'worldMap'>
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

export default World