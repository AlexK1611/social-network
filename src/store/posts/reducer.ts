import {
    IPostsState,
    PostsAction,
    PostsActionTypes
} from './types'

const initialState: IPostsState = {
    posts: null
}

export const postsReducer = (state = initialState, action: PostsAction): IPostsState => {
    switch (action.type) {
        case PostsActionTypes.SET_POSTS: {
            return {
                ...state,
                posts: action.payload
            }
        }
        default: {
            return state
        }
    }
}