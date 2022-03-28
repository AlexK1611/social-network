import { IAuthState } from './types'

const initialState: IAuthState = {
    refreshToken: 'refreshToken'
}

export const authReducer = (state = initialState): IAuthState => {
    return state
}