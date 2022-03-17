interface IPostItem {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IPostItems {
    data: IPostItem[]
}

export interface IPostsState {
    isLoading: boolean,
    postItems: IPostItems | null
}

export enum PostsActionTypes {
    GET_POSTS = 'GET_POSTS',
    SET_POSTS = 'SET_POSTS'
}

interface GetPostsAction {
    type: PostsActionTypes.GET_POSTS
}

interface SetPostsAction {
    type: PostsActionTypes.SET_POSTS,
    payload: IPostItems
}

export type PostsAction = GetPostsAction | SetPostsAction