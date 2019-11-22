import { createSelector } from 'reselect'

const selectStartUp = state => state.startup

export const selectStartHidden = createSelector(
    [selectStartUp],
    startup => startup.hiddenStart
)