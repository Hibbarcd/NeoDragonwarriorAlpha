import React from 'react'
import './card.styles.scss'
//import enemy_images_table from '../../data/imageAssets/enemy-images'
import red_slime from '../../data/imageAssets/red_slime.png'
import slime from '../../data/imageAssets/slime.png'
import drakee from '../../data/imageAssets/drakee.png'
import lizard from '../../data/imageAssets/lizard.png'
    let r
    let monster
    let name
    let HP
    let MP
    let AP
    let DP
    let exp
    let gp
    let retreatindex
    let t_drop


    function randNum(min, max) {
        r = Math.floor(Math.random() * (max - min + 1) + min);
        return r
       }
// designates png being used
r = randNum(1,2)
if (r === 1)
{
    monster = slime
    name = "slime"
    HP = 5
    MP = 0
    AP = 3
    DP = 3
    exp = 3
    gp = 4
    retreatindex = 10
    t_drop = 1
 }
 else if (r === 2) 
 {
    monster = red_slime
    name = "red_slime"
    HP = 7
    MP = 0
    AP = 4
    DP = 4
    exp = 4
    gp = 7
    retreatindex = 10
    t_drop = 1
 }
 else if (r === 3) 
 {
    monster = drakee
    name = "drakee"
    HP = 10
    MP = 0
    AP = 6
    DP = 5
    exp = 9
    gp = 12
    retreatindex = 10
    t_drop = 1
 }
 else if (r === 4) 
 {
    monster = lizard
 }
 else {
     monster = null
 }


export const Card = props => (
    <div className="card-container" id="enemy-container">
        <h2>{name}</h2>
        <h3>HP:{HP}</h3>
        <img className="enemy_img" src={`${monster}`} alt="monster"></img>
    </div>
)

