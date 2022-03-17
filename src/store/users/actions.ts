import { IUserItems, UsersActionTypes } from './types'

export const getUsersAction = () => ({
    type: UsersActionTypes.GET_USERS
})

export const setUsersAction = (payload: IUserItems) => ({
    type: UsersActionTypes.SET_USERS,
    payload
})