import { EnemyActionTypes} from './enemies.types'


export const setCurrentEnemy = enemy => ({
    type: EnemyActionTypes.SET_CURRENT_ENEMY,
    payload: enemy,
})