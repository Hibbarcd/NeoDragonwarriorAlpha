import  UserMenuActionTypes  from './user-dropdown.types'

const INITIAL_STATE = {
    showMenu: false,
}

const userDropdownReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case UserMenuActionTypes.TOGGLE_USER_DROPDOWN:
            return {
            ...state,
            showMenu: !state.showMenu,
        }     
            default:
              return state
          }

        }
export default userDropdownReducer
  
  
 