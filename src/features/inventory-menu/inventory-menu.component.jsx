import React from 'react';
import store from '../../config/store'
import { connect } from 'react-redux'
import './inventory-menu.style.scss'
import CustomButton from '../combat-button/customButton.component'
        
class GeneralInventoryMenu extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
             playerTurn : true,
      }
  }
  render() {

  return (         
    <div className='menu-container'>
      <div className="commandsMenu">
        <div id='commands'>
        <CustomButton id="fight">
          WEAPONS
        </CustomButton>
        <CustomButton id="spell">            
          ARMOR
        </CustomButton>
        <CustomButton id="parry">
          EQUIP
        </CustomButton>
        <CustomButton id="run">
          ITEMS
        </CustomButton>              
      </div>
    </div> 
    </div>
    )
  }
}


export default GeneralInventoryMenu;