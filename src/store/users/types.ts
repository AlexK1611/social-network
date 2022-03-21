export interface IUserItem {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string
    }
}

export interface IUsersState {
    userItems: IUserItem[] | null
}

export enum UsersActionTypes {
    GET_USERS = 'GET_USERS',
    SET_USERS = 'SET_USERS'
}

interface GetUsersAction {
    type: UsersActionTypes.GET_USERS
}

interface SetUsersAction {
    type: UsersActionTypes.SET_USERS,
    payload: IUserItem[]
}

export type UsersAction = GetUsersAction | SetUsersAction