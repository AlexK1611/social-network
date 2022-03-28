import { takeEvery, call, put, spawn } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setDailyPostAction, setPostsAction, setMorePostsAction } from './actions'
import { IPostItem, PostsActionTypes } from './types'

const getDailyPost = async () => {
    const { data } = await axiosInstance.get<IPostItem>('/posts/11')
    return data
}

function* loadDailyPost(): Generator {
    try {
        const data: any = yield call(getDailyPost)
        yield put(setDailyPostAction(data))
    } catch (error) {
        console.log(error)
    }
}

const getPosts = async () => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 20
        }
    })
    return data
}

function* loadPosts(): Generator {
    try {
        const data: any = yield call(getPosts)
        yield put(setPostsAction(data))
    } catch (error) {
        console.log(error)
    }
}

function* postsWorker() {
    /*
        fork and spawn are non-blocking effects, we don't have to wait one proccess
        fork makes our requests codependent - if one of them gets an error, the other won't work too
    */

    yield spawn(loadDailyPost)
    yield spawn(loadPosts)
}

const getMorePosts = async (start: number) => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 20,
            _start: start
        }
    })
    return data
}

function* loadMorePosts(
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
    yield takeEvery(PostsActionTypes.GET_POSTS, postsWorker)
    yield takeEvery(PostsActionTypes.GET_MORE_POSTS, loadMorePosts)
}