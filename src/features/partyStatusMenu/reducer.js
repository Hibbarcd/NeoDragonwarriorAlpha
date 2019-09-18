const initialState = {
    partyStats:{},
  }
  
  const worldMenuReducer = (state=initialState, action) => {
    switch(action.type) {
      case 'UPDATE_MENU':
        return {
          ...action.payload
        }
      default:
        return state
    }
  }
  
  export default worldMenuReducer