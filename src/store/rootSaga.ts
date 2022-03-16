import { all } from 'redux-saga/effects'
import { postsWatcher } from './posts/saga'
import { usersWatcher } from './users/saga'

export function* rootSaga() {
    yield all([
        postsWatcher(),
        usersWatcher()
    ])
}