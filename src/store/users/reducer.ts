import {
    IUsersState,
    UsersAction,
    UsersActionTypes
} from './types'

const initialState: IUsersState = {
    isLoading: false,
    userItems: null
}

export const usersReducer = (state = initialState, action: UsersAction): IUsersState => {
    switch (action.type) {
        case UsersActionTypes.GET_USERS: {
            return {
                ...state,
                isLoading: true
            }
        }
        case UsersActionTypes.SET_USERS: {
            return {
                ...state,
                isLoading: false,
                userItems: action.payload
            }
        }
        default: {
            return state
        }
    }
}