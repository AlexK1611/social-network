import { createSelector } from 'reselect'
import { RootState } from 'store/rootState'

export const userItems = createSelector(
    (state: RootState) => state.users,
    users => users.userItems
)