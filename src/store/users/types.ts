interface IUserItem {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        city: string
    }
}

export interface IUserItems {
    data: IUserItem[]
}

export interface IUsersState {
    users: IUserItems | null
}

export enum UsersActionTypes {
    GET_USERS = 'GET_USERS',
    SET_USERS = 'SET_USERS'
}

interface SetUsersAction {
    type: UsersActionTypes.SET_USERS,
    payload: IUserItems
}

export type UsersAction = SetUsersAction