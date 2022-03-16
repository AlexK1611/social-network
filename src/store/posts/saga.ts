import { takeEvery, call, put } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { IPostItems, PostsActionTypes } from './types'

const getPosts = async () => {
    const { data } = await axiosInstance.get<IPostItems>('/posts')
    return data
}

export function* postsWorker(): Generator {
    const payload = yield call(getPosts)
    yield put({ type: PostsActionTypes.SET_POSTS, payload })
}

export function* postsWatcher() {
    yield takeEvery(PostsActionTypes.GET_POSTS, postsWorker)
}