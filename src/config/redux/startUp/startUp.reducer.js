import StartUpActionTypes from './startUp.types'

const INITIAL_STATE = {
    hidden: false,
}

const startUpReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case StartUpActionTypes.TOGGLE_START_IMAGE:
            return {
                ...state,
                hidden: state.hidden,
            }
            default:
                return state
    }
}
export default startUpReducer