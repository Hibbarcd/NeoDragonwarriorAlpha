
import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleClickMove from './click-Movement'

function User(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: props.spriteLocation,
        width: '40px',
        height: '40px',
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.user,
  }
}
export default connect(mapStateToProps)(handleClickMove(User))