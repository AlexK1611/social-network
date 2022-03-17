import { createSelector } from 'reselect'
import { RootState } from 'store/rootState'

export const userItemsLoading = createSelector(
    (state: RootState) => state.users,
    users => users.isLoading
)

export const userItems = createSelector(
    (state: RootState) => state.users,
    users => users.userItems
)