import React from 'react'
import './card.styles.scss'
import red_slime from '../../data/imageAssets/red_slime.png'
import slime from '../../data/imageAssets/slime.png'
import drakee from '../../data/imageAssets/drakee.png'




    let randomnumber = 3
    let monster

if (randomnumber === 1)
{
    monster = slime
 }
 else if (randomnumber === 2) 
 {
    monster = red_slime
 }
 else if (randomnumber === 3) 
 {
    monster = drakee
 }
 else {
     monster = red_slime
 }


export const Card = props => (
    <div className="card-container">
            <h2>{props.monster.name}</h2>
            <h3>HP:{props.monster.HP}</h3>
            <img className="enemy_img" src={`${monster}`} alt="monster"></img>
    </div>
)