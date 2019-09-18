import  DPADActionTypes  from './d-pad.types'

const INITIAL_STATE = {
    hidden: true,
}

const dpadReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case DPADActionTypes.TOGGLE_DPAD_HIDDEN:
            return {
            ...state,
            hidden: !state.hidden,
        }     
            default:
              return state
          }

        }
export default dpadReducer
  
  
 