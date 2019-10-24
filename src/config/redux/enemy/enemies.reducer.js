import { EnemyActionTypes} from './enemies.types'

const INITIAL_STATE = {
    currentEnemy: null,
}

const enemyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EnemyActionTypes.SET_CURRENT_ENEMY:
        return {
            ...state,
            currentEnemy: action.payload,
        }
            
        default:
            return state;
    }
}
export default enemyReducer