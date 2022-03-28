export interface IPostItem {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostsState {
    postItems: IPostItem[] | null,
    dailyPost: IPostItem | null
}

export enum PostsActionTypes {
    SET_DAILY_POST = 'SET_DAILY_POST',
    GET_POSTS = 'GET_POSTS',
    SET_POSTS = 'SET_POSTS',
    GET_MORE_POSTS = 'GET_MORE_POSTS',
    SET_MORE_POSTS = 'SET_MORE_POSTS'
}

interface GetPostsAction {
    type: PostsActionTypes.GET_POSTS
}

interface SetDailyPostAction {
    type: PostsActionTypes.SET_DAILY_POST,
    payload: IPostItem
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
    SetDailyPostAction |
    SetPostsAction |
    GetMorePostsAction |
    SetMorePostsAction
)