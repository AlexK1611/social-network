import { all } from 'redux-saga/effects'
import { postsWatcher } from './posts/saga'

export function* rootSaga() {
    yield all([
        postsWatcher()
    ])
}