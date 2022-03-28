import { takeEvery, call, put, select } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setUsersAction } from './actions'
import { IUserItem, UsersActionTypes } from './types'
import { RootState } from 'store/rootState'

const getUsers = async (token: string) => {
    const { data } = await axiosInstance.get<IUserItem[]>('/users', {
        params: {
            _token: token
        }
    })
    return data
}

export function* usersWorker(): Generator {
    try {
        const token: any = yield select((state: RootState) => state.auth.refreshToken)
        const payload: any = yield call(getUsers, token)
        yield put(setUsersAction(payload))
    } catch (error) {
        console.log(error)
    }
}

export function* usersWatcher() {
    yield takeEvery(UsersActionTypes.GET_USERS, usersWorker)
}