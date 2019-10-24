import React from 'react'
import './card.styles.css'

export const Card = props => (
    <div className="card-container">
    <div className='image'>
    <img alt="monster" src={`${props.monster.image}`}></img>
    </div>
            <h1>{props.monster.name}</h1>
    </div>
)