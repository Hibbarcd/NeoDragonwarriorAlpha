import React from 'react'
import { connect } from 'react-redux'

import  './dpad-popup.style.scss'

import handleClickMove from './clickMovement';

const DpadPopup = ({ player }) => {
    return (
    <div className='d-pad-reveal'>            
        <div className='direction-pad'>
                <button className='button' type='submit' onClick={() => handleClickMove(player)} value='WEST'>
                LEFT
                </button>
                <button className='button' type='submit' onClick={() => handleClickMove(player)} value='NORTH'>
                UP
                </button>
                <button className='button' type='submit' onClick={() => handleClickMove(player)} value='EAST'>
                RIGHT
                </button>
                <button className='button'  type='submit' onClick={() => handleClickMove(player)} value='SOUTH'>
                DOWN
                </button>
        </div>
    </div>
    )
}

function mapStateToProps(state) {
    return {
      ...state.player,
    }
  }
export default connect(mapStateToProps)(handleClickMove(DpadPopup))