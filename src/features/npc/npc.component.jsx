
import React from 'react'
import { connect } from 'react-redux'
import npc_walkSprite from './ResizeTemplate.png'
import handleNPCMovement from './npc_movement.component'


function Npc(props) {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${npc_walkSprite}')`,
        backgroundPosition: props.spriteLocation,
        width: '40px',
        height: '40px',
      }}
    />
  )
}

function mapStateToProps(state) {
  return {
    ...state.npc,
  }
}
export default connect(mapStateToProps)(handleNPCMovement(Npc))
