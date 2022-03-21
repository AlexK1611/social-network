export interface IPostItem {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostsState {
    postItems: IPostItem[] | null
}

export enum PostsActionTypes {
    GET_POSTS = 'GET_POSTS',
    SET_POSTS = 'SET_POSTS',
    GET_MORE_POSTS = 'GET_MORE_POSTS',
    SET_MORE_POSTS = 'SET_MORE_POSTS'
}

interface GetPostsAction {
    type: PostsActionTypes.GET_POSTS
}

interface SetPostsAction {
    type: PostsActionTypes.SET_POSTS,
    payload: IPostItem[]
}

interface GetMorePostsAction {
    type: PostsActionTypes.GET_MORE_POSTS
}

interface SetMorePostsAction {
    type: PostsActionTypes.SET_MORE_POSTS,
    payload: IPostItem[]
}

export type PostsAction = (
    GetPostsAction | 
    SetPostsAction |
    GetMorePostsAction |
    SetMorePostsAction
)