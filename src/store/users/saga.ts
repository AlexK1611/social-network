import { takeEvery, call, put } from 'redux-saga/effects'
import { axiosInstance } from 'config/api'
import { setUsersAction } from './actions'
import { IUserItems, UsersActionTypes } from './types'

const getUsers = async () => {
    const { data } = await axiosInstance.get<IUserItems>('/users')
    return data
}

export function* usersWorker(): Generator {
    try {
        const payload: any = yield call(getUsers)
        yield put(setUsersAction(payload))
    } catch (error) {
        console.log(error)
    }
}

export function* usersWatcher() {
    yield takeEvery(UsersActionTypes.GET_USERS, usersWorker)
}