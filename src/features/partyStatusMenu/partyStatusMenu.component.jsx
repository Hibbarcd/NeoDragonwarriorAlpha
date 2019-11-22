import React from 'react';
import { connect } from 'react-redux';


import './style.css'

 function PartyMenu(props) {
    return (
      <div className="Party_Status_Menu">
        <div className='row-character'>
          <div className='column-stat'></div>
          <div className='column-name'>TestHero</div>
          <div className='column-name'>TestSoldier</div>
          <div className='column-name'>TestMage</div>
          <div className='column-name'>TestPriest</div>
        </div>
        <div className='row-character'>
          <div className='column-stat'>HP</div>
          <div className='column-hp'>25</div>
          <div className='column-hp'>35</div>
          <div className='column-hp'>18</div>
          <div className='column-hp'>22</div>
        </div>
        <div className='row-character'>
          <div className='column-stat'>MP</div>
          <div className='column-hp'>12</div>
          <div className='column-hp'>0</div>
          <div className='column-hp'>40</div>
          <div className='column-hp'>30</div>
        </div>
        <div className='row-character'>
          <div className='column-stat'>Class(Level)</div>
          <div className='column-class'>Hero(Level)</div>
          <div className='column-class'>Soldier(Level)</div>
          <div className='column-class'>Mage(Level)</div>
          <div className='column-class'>Priest(Level)</div>
        </div>
      </div> 
    )
   }

   function mapStateToProps(state) {
      return {
        ...state.player,
      }
    }
   export default connect(mapStateToProps)(PartyMenu);