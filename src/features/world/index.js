import React from 'react'
import Map from '../map'
import PartyMenu from '../partyStatusMenu/index'
import Player from '../player'
import { tiles } from '../../data/maps/1'
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
        <GeneralInventoryMenu isActive={true} >I am a component</GeneralInventoryMenu>
      </div>
        <Player />
        <PartyMenu />
    </div>
  )
}

export default World