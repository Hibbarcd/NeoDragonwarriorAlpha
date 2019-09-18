import React from 'react';
import { connect } from 'react-redux'
import './style.css'

  function getNewMusic(location) {
    // eslint-disable-next-line
switch(location) {
case 'GLOBAL':
return 'global'
// case 'TOWN':
// return [  ]
// case 'FIGHT':
// return [  ]
}
}
function GlobalAudio(props) {

  return (
<div className={`audio ${getNewMusic(props.location)}`}>
  <audio id='global' 
  // controls 
  autoPlay
  >

    <source src="https://www.woodus.com/den/gallery/graphics/dq3snes/mp3/09%20Dragon%20Quest%203%20-%20Adventure.mp3" id='myaudio' type="audio/mpeg" />
Your browser does not support the audio tag.
  </audio>
</div>
  )
}

function mapStateToProps(state) {
  return {
    audio: state.map.player,
  }
}

export default connect(mapStateToProps)(GlobalAudio);
