import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
    <div className='image-container'>
    <img src={`${props.monster.image}`} alt="monster"></img>
    </div>
            <h1>{props.monster.name}</h1>
            <h1>HP:{props.monster.HP}</h1>
    </div>
)