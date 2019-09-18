import React from 'react'
import { connect } from 'react-redux'
import enemy from './monster_list.png'
import handleEnemy from './randomEnemy'

function EnemySprite(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url(${enemy.png}')`,
        backgroundPosition: props.spriteLocation,
        width: '300px',
        height: '300px',
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.enemy,
  }
}

export default connect(mapStateToProps)(handleEnemy(EnemySprite))
