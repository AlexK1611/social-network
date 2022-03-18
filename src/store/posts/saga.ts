import { takeEvery, call, put } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setPostsAction } from './actions'
import { IPostItem, PostsActionTypes } from './types'

const getPosts = async () => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 10
        }
    })
    return data
}

export function* postsWorker(): Generator {
    try {
        const payload: any = yield call(getPosts)
        yield put(setPostsAction(payload))
    } catch (error) {
        console.log(error)
    }
}

export function* postsWatcher() {
    yield takeEvery(PostsActionTypes.GET_POSTS, postsWorker)
}