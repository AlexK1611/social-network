import { IPostItem, PostsActionTypes } from './types'

export const getPostsAction = () => ({
    type: PostsActionTypes.GET_POSTS
})

export const setPostsAction = (payload: IPostItem[]) => ({
    type: PostsActionTypes.SET_POSTS,
    payload
})

export const getMorePostsAction = (payload: number) => ({
    type: PostsActionTypes.GET_MORE_POSTS,
    payload
})

export const setMorePostsAction = (payload: IPostItem[]) => ({
    type: PostsActionTypes.SET_MORE_POSTS,
    payload
})