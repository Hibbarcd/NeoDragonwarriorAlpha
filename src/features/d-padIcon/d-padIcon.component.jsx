import React from 'react'
import {ReactComponent as DPADicon } from '../../data/imageAssets/crownIcon.svg'
import { connect } from 'react-redux'
import { toggleDPADHidden } from '../../config/redux/d-pad/d-pad.actions'
import './d-padIcon.style.scss'

const DPADIcon = ({toggleDPADHidden}) => (
    <div className='dpad-icon' onClick={toggleDPADHidden} >
        <DPADicon className='directional-icon' />
        <span className='display-dpad'>Dpad Display</span>

    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleDPADHidden: () => dispatch(toggleDPADHidden())
  });

export default connect(null, mapDispatchToProps)(DPADIcon)