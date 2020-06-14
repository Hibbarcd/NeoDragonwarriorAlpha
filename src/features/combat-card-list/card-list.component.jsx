import React from 'react';
import './card-list.styles.css'
import {Card} from '../combat-card/card.component'
let cn

function randNumCards(min, max) {
    cn = Math.floor(Math.random() * (max - min + 1) + min);
    return cn
   }
randNumCards(1,5)
 export const CardList = (props) => (

    <div className='card-list'> 

        {props.monsters.map(monster => 
        <Card key={ monster.id} monster={monster} />,
        )} 
        {props.monsters.map(monster => 
        <Card key={ monster.id} monster={monster} />,
        )} 
        {props.monsters.map(monster => 
        <Card key={ monster.id} monster={monster} />,
        )} 
        {props.monsters.map(monster => 
        <Card key={ monster.id} monster={monster} />,
        )} 
    </div>
 )

