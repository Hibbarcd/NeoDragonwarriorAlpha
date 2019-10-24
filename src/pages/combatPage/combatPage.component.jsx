import React, { Component } from 'react'
import { connect } from 'react-redux'

import {CardList} from '../../features/combat-card-list/card-list.component'
import enemies from '../../data/enemies/testEnemies.json'
import PartyCombatMenu from '../../features/combat-menu/partyCombatMenu.component'

import './combatPage.style.scss'

class CombatPage extends Component {
    constructor() {
      super()
  
      this.state = {
        monsters: [],
        randomField: '',
        showChild: true,
      }
    }
  
    componentDidMount(){
         this.setState({monsters: enemies})
         }
  
         handleChange = (e)  => {
          this.setState({ randomfield: e.target.value })
        }
  
  
  render() {
    const { monsters, randomField } = this.state
  
    const randomizedMonster = monsters.filter(monster => 
      monster.id.includes(randomField)
    )
  
    return (
      <div className="App"
          style= {{
            backgroundColor: 'black',
          }}
      >
      <button                
            onClick={() =>  
                    this.setState(state => ({
                      randomField: Math.floor(Math.random() * 8 + 1),
                    }))
                  }>
        random number
      </button>
  
        <input 
          type='search' 
          placeholder="search monsters"
          // code below logs value of input from keyboard and console.logs it, but it has to be set as the 2nd parameter of the setState function because it is async.
          onChange={e => this.setState({ randomField: e.target.value }, () => console.log(this.state)) }/>
      <CardList monsters={randomizedMonster} />
      <PartyCombatMenu />

      </div>

  )
  }
  }

// class CombatPage extends React.Component {
//     constructor() {
//         super()
    
//         this.state = {
//           monsters: [],
//           randomField: '',
//           showChild: true,
//         }
//       }
//     componentDidMount() {
//         // alert('Combat Begins')
//         this.setState({monsters: enemies})
//     }    
//         handleChange = (e)  => {
//             this.setState({ randomfield: e.target.value })
//           }
    

//     render() {
//         const { match, monsters, randomField } = this.props
//         const randomizedMonster = monsters.filter(monster => 
//             monster.id.includes(randomField)
//           )

//         return (
//             <div className='combat-page'>
//                 <Route path={`${match.path}`}
//                     // component={} 
//                     />
//                     <div className='combat-container'>
//                     Test of Text for Combat Page
//                         <div className='party-menu-container'>
//                             <PartyMenu />
//                         </div>
//                     </div>

//                 {/* <Route path={`${match.path}/:playerId`} /> */}
//             </div>
//         )
//     }
// }
// // const mapDispatchToProps = dispatch => ({
// //     fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
// //   })

  export default connect(
      null,
    //   mapDispatchToProps
      )(CombatPage)
  