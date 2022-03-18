import { takeEvery, call, put } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setPostsAction, setMorePostsAction } from './actions'
import { IPostItem, PostsActionTypes } from './types'

const getPosts = async () => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 10
        }
    })
    return data
}

export function* loadPostsWorker(): Generator {
    try {
        const data: any = yield call(getPosts)
        yield put(setPostsAction(data))
    } catch (error) {
        console.log(error)
    }
}

const getMorePosts = async (start: number) => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 10,
            _start: start
        }
    })
    return data
}

export function* loadMorePostsWorker(
    action: {
        type: PostsActionTypes.GET_MORE_POSTS,
        payload: number
    }
): Generator {
    try {
        const data: any = yield call(getMorePosts, action.payload)
        yield put(setMorePostsAction(data))
    } catch (error) {
        console.log(error)
    }
}

export function* postsWatcher() {
    yield takeEvery(PostsActionTypes.GET_POSTS, loadPostsWorker)
    yield takeEvery(PostsActionTypes.GET_MORE_POSTS, loadMorePostsWorker)
}