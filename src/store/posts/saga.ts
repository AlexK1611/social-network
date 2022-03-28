import {
    takeEvery,
    takeLatest,
    call,
    put,
    spawn,
    select
} from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setDailyPostAction, setPostsAction, setMorePostsAction } from './actions'
import { IPostItem, PostsActionTypes } from './types'
import { RootState } from 'store/rootState'

const getDailyPost = async (token: string) => {
    const { data } = await axiosInstance.get<IPostItem>('/posts/11', {
        params: {
            _token: token
        }
    })
    return data
}

function* loadDailyPost(): Generator {
    try {
        const token: any = yield select((state: RootState) => state.auth.refreshToken)
        const data: any = yield call(getDailyPost, token)
        yield put(setDailyPostAction(data))
    } catch (error) {
        console.log(error)
    }
}

const getPosts = async (token: string) => {
    const { data } = await axiosInstance.get<IPostItem[]>('/posts', {
        params: {
            _limit: 20,
            _token: token
        }
    })
    return data
}

function* loadPosts(): Generator {
    try {
        const token: any = yield select((state: RootState) => state.auth.refreshToken)
        const data: any = yield call(getPosts, token)
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

    /*
        in case there could be a delay, only the last request will start
    */
    yield takeLatest(PostsActionTypes.GET_MORE_POSTS, loadMorePosts)
}