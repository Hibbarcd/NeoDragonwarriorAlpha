import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectEnemyForCombat } from '../../redux/enemies/enemies.selectors'

import './directory.style.scss'
import Card from '../card/card.component'
class Enemy_Directory extends React.Component {
    constructor() {
        super()

        this.state = {
            sections: [ 
                {
                    id: '1234e',
                    name: 'slime',
                    image: './images/slime.png',
                    HP: 5,
                    MP: 0,
                    AP: 2,
                    DP: 2,
                    exp: 2,
                    gp: 5,
                    spells: false,
                    retreatindex: 20,
                    treasuerdropindex: 1  
                },  
                {
                  id: '5678e',
                  name: 'red-slime',
                  image: './images/red_slime.png',
                  HP: 10,
                  MP: 0,
                  AP: 4,
                  DP: 3,
                  exp: 4,
                  gp: 7,
                  spells: false,
                  retreatindex: 10,
                  treasuerdropindex: 1  
              }
            ]
        }
    }
    render() {
        return (
            <div className='enemy-menu'>
                {
                this.state.sections.map(({ id, ...sectionProps}) => (
                    <Card key={id} {...sectionProps}/>
                ))
                }
            </div>

        )
        }
    }
const mapStateToProps = createStructuredSelector({
    enemy_gallery: selectEnemyForCombat,
})


export default connect(mapStateToProps)(Enemy_Directory)