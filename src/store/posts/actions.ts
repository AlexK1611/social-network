import { IPostItems, PostsActionTypes } from './types'

export const getPostsAction = () => ({
    type: PostsActionTypes.GET_POSTS
})

export const setPostsAction = (payload: IPostItems) => ({
    type: PostsActionTypes.SET_POSTS,
    payload
})