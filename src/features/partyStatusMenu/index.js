import React from 'react';
import { connect } from 'react-redux';
import './style.css'

 function PartyMenu(props) {
        return (
          <div className="Party_Status_Menu"
                style={{
          // this style section controls the battle menu box
        position: 'relative',
        bottom: '42vh',            
      }}
      ><p>Use keyboard Direction arrows to navigate the map. </p>
      <p>Many features to be added when time permits.</p>
          {/* <h1> Const(fight screen party stats) Menu </h1> */}
 

        </div> 
    )
   }

   function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
   export default connect(mapStateToProps)(PartyMenu);