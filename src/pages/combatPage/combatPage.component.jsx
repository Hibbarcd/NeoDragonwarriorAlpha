import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import './combatPage.style.scss'

import PartyMenu from '../../features/partyStatusMenu/partyStatusMenu.component'

// import  fetchCollectionsStartAsync  from '../../redux/shop/shop.actions'


class CombatPage extends React.Component {
    componentDidMount() {
        // alert('Combat Begins')
    }

    render() {
        const { match } = this.props

        return (
            <div className='combat-page'>
                <Route path={`${match.path}`}
                    // component={} 
                    />
                    <div className='combat-container'>
                    Test of Text for Combat Page
                        <div className='party-menu-container'>
                            <PartyMenu />
                        </div>
                    </div>

                {/* <Route path={`${match.path}/:playerId`} /> */}
            </div>
        )
    }
}
// const mapDispatchToProps = dispatch => ({
//     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
//   })

  export default connect(
      null,
    //   mapDispatchToProps
      )(CombatPage)
  