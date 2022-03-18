import { IPostItem, PostsActionTypes } from './types'

export const getPostsAction = () => ({
    type: PostsActionTypes.GET_POSTS
})

export const setPostsAction = (payload: IPostItem[]) => ({
    type: PostsActionTypes.SET_POSTS,
    payload
})