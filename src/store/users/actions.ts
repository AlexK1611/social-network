import { IUserItem, UsersActionTypes } from './types'

export const getUsersAction = () => ({
    type: UsersActionTypes.GET_USERS
})

export const setUsersAction = (payload: IUserItem[]) => ({
    type: UsersActionTypes.SET_USERS,
    payload
})