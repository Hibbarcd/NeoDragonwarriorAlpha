import React from 'react'
import { connect } from 'react-redux'
import  DpadIcon  from '../d-padIcon/d-padIcon.component'
import DpadPopup from '../directionPadPopup/dpad-popup.component';
// import { ReactComponent as Logo } from '../../data/imageAssets/crownIcon.svg'
import './header.style.scss'

// import { auth } from '../../firebase/firebase.utils'

const Header = ({ hidden }) => (
    <div className='header'>
            {/* <Logo className= 'logo' /> */}
        <div className= 'options'>
            <div className='option-user'>
            <button>USER MENU</button>
            </div>
            <div className='option-dev'>
            <button>DEV MENU</button>
            </div>
            <div className='option-misc'>
            <button>MISC</button>
            </div>
            <DpadIcon />
        </div>

        {  hidden ? null : <DpadPopup />  }

    </div>
)

const mapStateToProps = ({ hidden:{ hidden } }) =>  ({
    hidden
})

export default connect(mapStateToProps)(Header)