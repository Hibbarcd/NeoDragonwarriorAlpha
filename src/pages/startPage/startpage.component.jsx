import React from 'react';
import { connect } from 'react-redux'
import { LogoContainer } from '../../features/logoStart/startLogo.component'

import './startpage.style.scss'

class StartPage extends React.Component {
    componentDidMount() {

    }
    
    render() {
         return (
             <div className='start-page'>
                    <LogoContainer />
             </div>
         )
    }
}
export default connect(
    null,
    // mapDispatchToProps
)(StartPage)