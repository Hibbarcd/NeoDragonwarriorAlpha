import React, { Component } from 'react'
import { connect } from 'react-redux'

import PartyCreateMenu from '../../features/party-create-menu/party-create-menu.component'
import PartyMenu from '../../features/partyStatusMenu/partyStatusMenu.component'

import './charGen.style.scss'

class CharGenPage extends Component {
    constructor() {
      super()
  
      this.state = {
        monsters: [],
        randomField: '',
        showChild: true,
      }
    }
  
    componentDidMount(){}         

 
  render() {
      
    return (
      <div className="combat-container"
          style= {{
            backgroundColor: 'black',
          }}
      >
      {/* <button                
            onClick={() =>  
                    this.setState(state => ({
                      randomField: Math.floor(Math.random() * 8 + 1),
                    }))
                  }>
        random number
      </button> */}
     <PartyCreateMenu />
      <PartyMenu />
      </div>

  )
  }
  }

  export default connect(
      null,
    //   mapDispatchToProps
      )(CharGenPage)
  