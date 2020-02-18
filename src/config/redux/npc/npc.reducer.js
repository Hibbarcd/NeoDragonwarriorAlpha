const initialState = {
    position: [400, 40],
    spriteLocation: '0px 0px',
    direction: 'SOUTH',
    walkIndex: 0,
    items: ['']
  }
  
  const npcReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'MOVE_NPC':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default npcReducer