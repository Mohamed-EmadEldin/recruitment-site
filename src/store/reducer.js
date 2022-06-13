import {LOGGEDIN, PASSWORDTYPED, USERNAMETYPED} from "./actions";
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
const initialState = {
    "token": null,
    "userName": '',
    "user_type": '',
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

    return state
}

export const store = createStore(reducer,applyMiddleware(thunkMiddleware))

