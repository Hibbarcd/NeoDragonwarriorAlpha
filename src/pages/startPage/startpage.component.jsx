import React from 'react';
import { connect } from 'react-redux'
import { LogoContainer } from '../../features/logoStart/startLogo.component'
import { toggleStartImage } from '../../config/redux/startUp/startUp.actions'

import './startpage.style.scss'

const StartPage = ({toggleStartImage}) => (
    <div className='start-page'>
            <LogoContainer onClick={toggleStartImage}/>
    </div>
)

 const mapDispatchToProps = dispatch => ({
    toggleStartImage: () => dispatch(toggleStartImage())
 })

export default connect(null,mapDispatchToProps
)(StartPage)