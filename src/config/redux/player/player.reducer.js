const initialState = {
    position: [640, 0],
    spriteLocation: '0px 0px',
    direction: 'EAST',
    walkIndex: 0,
    HP: 30,
    MP: 10,
    gold: 50,
    items: ['clothes','club','medical herb']
  }
  
  const playerReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'MOVE_PLAYER':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default playerReducer