import React from 'react';
import { connect } from 'react-redux';


import './style.css'

 function PartyMenu(props) {
    return (
      <div className="Party_Status_Menu">
        <div className='row-character'>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
        </div>
        <div className='row-character'>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
        </div>
        <div className='row-character'>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
        </div>
        <div className='row-character'>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
          <div className='column-name'>TestName</div>
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