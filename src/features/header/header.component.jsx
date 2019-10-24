import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import  DpadIcon  from '../d-padIcon/d-padIcon.component'
import DpadPopup from '../directionPadPopup/dpad-popup.component';
// import { ReactComponent as Logo } from '../../data/imageAssets/crownIcon.svg'
import './header.style.scss'


const Header = ({ hidden }) => (
    <div className='header'>
        <div className= 'options'>
            <div className='option-user'>
            <button>USER MENU</button>
            </div>
            <div className='option-dev'>
                <Link to='/'>
                    <button>WORLD MAP</button>
                </Link>
            </div>
            <div className='option-misc'>
                <Link to='/combat'>
                    <button>COMBAT</button>
                </Link>
            </div>
            <div className='option-misc'>
                <Link to='/signin'>
                    <button>LOGIN</button>
                </Link>
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