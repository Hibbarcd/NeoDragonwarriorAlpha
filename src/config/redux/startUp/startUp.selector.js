import { createSelector } from 'reselect'

const selectStartUp = state => state.startup

export const selectIsGameLoaded = createSelector(
    [selectStartUp],
)