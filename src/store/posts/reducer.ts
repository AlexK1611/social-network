import {
    IPostsState,
    PostsAction,
    PostsActionTypes
} from './types'

const initialState: IPostsState = {
    postItems: null
}

export const postsReducer = (state = initialState, action: PostsAction): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.SET_POSTS: {
            return {
                ...state,
                postItems: action.payload
            }
        }
        case PostsActionTypes.SET_MORE_POSTS: {
            const { postItems } = state
            return postItems ? {
                ...state,
                postItems: [...postItems, ...action.payload]
            } : state
        }
        default: {
            return state
        }
    }
}