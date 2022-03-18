import {
    IPostsState,
    PostsAction,
    PostsActionTypes
} from './types'

const initialState: IPostsState = {
    isLoading: false,
    postItems: null
}

export const postsReducer = (state = initialState, action: PostsAction): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.GET_POSTS:
        case PostsActionTypes.GET_MORE_POSTS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case PostsActionTypes.SET_POSTS: {
            return {
                ...state,
                isLoading: false,
                postItems: action.payload
            }
        }
        case PostsActionTypes.SET_MORE_POSTS: {
            const { postItems } = state
            return postItems ? {
                ...state,
                isLoading: false,
                postItems: [...postItems, ...action.payload]
            } : state
        }
        default: {
            return state
        }
    }
}