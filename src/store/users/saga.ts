import { takeEvery, call, put } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { IUserItems, UsersActionTypes } from './types'

const getUsers = async () => {
    const { data } = await axiosInstance.get<IUserItems>('/users')
    return data
}

export function* usersWorker(): Generator {
    const payload = yield call(getUsers)
    yield put({ type: UsersActionTypes.SET_USERS, payload })
}

export function* usersWatcher() {
    yield takeEvery(UsersActionTypes.GET_USERS, usersWorker)
}