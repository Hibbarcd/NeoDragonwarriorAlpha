
const initialState = {
    position: [0, 0],
    spriteLocation: '0px 0px',
    typeSprite: 'enemy',
    enemyIndex: 0,
  }
  
  const enemyReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'RANDOM_ENEMY':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default enemyReducer