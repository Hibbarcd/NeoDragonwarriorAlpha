import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import  DpadIcon  from '../d-padIcon/d-padIcon.component'
import DpadPopup from '../directionPadPopup/dpad-popup.component';
import UserMenuDropDown from '../userMenu-Dropdown/user-dropdown.component'
import { toggleUserDropdown } from '../../config/redux/header-dropdown/user-dropdown.actions'

import './header.style.scss'


const Header = ({ hidden, showMenu }) => (
    <div className='header'>
        <div className= 'options'>
            <div className='option-user'>
            <button onClick={toggleUserDropdown}>
                USER MENU
            </button>
                <div className='drop-down-user'>
                    { showMenu ? <UserMenuDropDown /> : null }
                </div>
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
                <Link to='/town'>
                    <button>Town</button>
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

const mapStateToProps = ({ hidden:{ hidden }, showMenu:{ showMenu }}) =>  ({
    hidden,
    showMenu
})

const mapDispatchToProps = dispatch => ({
    toggleUserDropdown: () => dispatch(toggleUserDropdown())
  });

export default connect(
    mapStateToProps, 
    mapDispatchToProps)(Header)