import { createSelector } from 'reselect'

const selectEnemy = state => state.enemy

export const selectCurrentEnemy = createSelector(
    [selectEnemy],
    enemy => enemy.currentEnemy
)