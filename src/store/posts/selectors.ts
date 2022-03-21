import { createSelector } from 'reselect'
import { RootState } from 'store/rootState'

export const postItems = createSelector(
    (state: RootState) => state.posts,
    posts => posts.postItems
)