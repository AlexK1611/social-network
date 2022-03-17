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
        case PostsActionTypes.GET_POSTS: {
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
        default: {
            return state
        }
    }
}