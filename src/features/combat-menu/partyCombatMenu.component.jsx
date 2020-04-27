import React from 'react';
// import store from '../../config/store'
// import { connect } from 'react-redux'
import './partyCombatMenu.style.scss'
import CustomButton from '../combat-button/customButton.component'


class PartyCombatMenu extends React.Component {
  constructor(props) {
      super(props)
      this.fireFightonClick = this.fireFightonClick.bind(this)
      this.fireSpellMenuonClick = this.fireSpellMenuonClick.bind(this)
      this.fireParryonClick = this.fireParryonClick.bind(this)
      this.fireRunonClick = this.fireRunonClick.bind(this)
      this.fireInvMenuonClick = this.fireInvMenuonClick.bind(this)


      this.state = {
             fighting : true,
             enemyStatus: 'alive',
             partyStatus: 'alive',
             attacking: false,
             defending: true,
            }
          }
          fireFightonClick() 
          {
          console.log("Fired fight action")
          }
          fireSpellMenuonClick() 
          {
          console.log("Fired spell menu")
          }
          fireParryonClick() 
          {
          console.log("Fired parry action")
          }
          fireInvMenuonClick() 
          {
          console.log("Fired inventory Click")
          }
          fireRunonClick() 
          {
          console.log("Fired Run action")
          }

          render() {
            

  return (         
    <div className='menu-container'>
      <div className="commandsMenu">
        <div id='commands'>
        <CustomButton id="fight" onClick = {this.fireFightonClick}>
          FIGHT
        </CustomButton>
        <CustomButton id="spell" onClick = {this.fireSpellMenuonClick}>            
          SPELL
        </CustomButton>
        <CustomButton id="parry" onClick = {this.fireParryonClick}>
          PARRY
        </CustomButton>
        <CustomButton id="run" onClick = {this.fireRunonClick}>
          RUN
        </CustomButton>
        <CustomButton id="item" onClick = {this.fireInvMenuonClick} >
          ITEM
        </CustomButton>               
      </div>
    </div> 
    </div>
    )

  }
}


export default PartyCombatMenu