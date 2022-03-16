import {
    IUsersState,
    UsersAction,
    UsersActionTypes
} from './types'

const initialState = {
    users: null
}

export const usersReducer = (state = initialState, action: UsersAction): IUsersState => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        default: {
            return state
        }
    }
}