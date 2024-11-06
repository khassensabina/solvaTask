import { UnknownAction } from "redux"

export interface UserState {
    username: string,
    password: string
}

export interface LoginState {
    isLoggedIn: boolean,
    user: UserState
}

const initialState: LoginState = {
    isLoggedIn: false,
    user: {username: '', password: ''}
}

export default function loginReducer(state = initialState, action: UnknownAction) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                user: {
                    ...state.user,
                    username: (action.payload as UserState).username,
                    password: (action.payload as UserState).password
                },
            };
        case "LOGIN_FAIL":
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                user: {
                    ...state.user,
                    username: '',
                    password: ''
                },
            };
        default:
            return state;
    }
}