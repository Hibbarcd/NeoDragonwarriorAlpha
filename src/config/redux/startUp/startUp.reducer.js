import StartUpActionTypes from './startUp.types'

const INITIAL_STATE = {
    hiddenStart: false,
}

const startUpReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case StartUpActionTypes.TOGGLE_START_IMAGE:
            return {
                ...state,
                hiddenStart: state.hiddenStart,
            }
            default:
                return state
    }
}
export default startUpReducer