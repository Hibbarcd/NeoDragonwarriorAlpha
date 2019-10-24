import React from 'react';
// import store from '../../config/store'
// import { connect } from 'react-redux'
import './partyCombatMenu.style.scss'
import CustomButton from '../combat-button/customButton.component'


class PartyCombatMenu extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
             fighting : true,
             enemyStatus: 'alive',
             partyStatus: 'alive',
             attacking: false,
             defending: true,
      }
  }
  render() {

  return (         
    <div className='menu-container'>
      <div className="commandsMenu">
        <div id='commands'>
        <CustomButton id="fight">
          FIGHT
        </CustomButton>
        <CustomButton id="spell">            
          SPELL
        </CustomButton>
        <CustomButton id="parry">
          PARRY
        </CustomButton>
        <CustomButton id="run">
          RUN
        </CustomButton>
        <CustomButton id="item">
          ITEM
        </CustomButton>               
      </div>
    </div> 
    </div>
    )

}
}
export default PartyCombatMenu