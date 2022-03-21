import {
    IUsersState,
    UsersAction,
    UsersActionTypes
} from './types'

const initialState: IUsersState = {
    userItems: null
}

export const usersReducer = (state = initialState, action: UsersAction): IUsersState => {
    switch (action.type) {
        case UsersActionTypes.SET_USERS: {
            return {
                ...state,
                userItems: action.payload
            }
        }
        default: {
            return state
        }
    }
}