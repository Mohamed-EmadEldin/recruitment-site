import {LOGGEDIN, LOGOUT, PASSWORDTYPED, SETTHEME, USERNAMETYPED} from "./actions";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
const initialState = {
    "token": null,
    "userName": '',
    "user_type": '',
    "user_id": '',
    'can_apply': false,
    'can_post': false,
    'typed_userName': '',
    'typed_password': '',
}

const reducer = (state = initialState, action) =>
{
    if ( action.type === LOGGEDIN ) {
        return {
            ...state,
            "token": action.payload
        }
    }

    if ( action.type === USERNAMETYPED) {

        return  {
            ...state,
            typed_userName: action.payload
        }
    }

    if ( action.type === PASSWORDTYPED) {

        return  {
            ...state,
            typed_password: action.payload
        }
    }
    if ( action.type === LOGOUT) {

        return  {
            ...state,
            token: null,
            userName: '',
            user_type: '',
            user_id: '',
            can_apply: false,
            can_post: false,
            typed_userName: '',
            typed_password: '',

        }
    }
    if ( action.type === SETTHEME) {

        return  {
            ...state,
            user_type: action.payload.user_type,
            userName: action.payload.userName,
            can_apply: action.payload.can_apply,
            user_id: action.payload.user_id,
        }

    }

    return state
}

export const store = createStore(reducer,applyMiddleware(thunkMiddleware))

