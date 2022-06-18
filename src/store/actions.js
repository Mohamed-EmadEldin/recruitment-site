import axios from "axios";
// import {useSelector} from "react-redux";
// import {store} from "./reducer";

export const LOGIN = 'LOGIN'
export const LOGGEDIN = 'LOGEDIN'
export const USERNAMETYPED = 'USERNAMETYPED'
export const PASSWORDTYPED = 'PASSWORDTYPED'
export const SETTHEME = 'SETTHEME'
export const LOGOUT = 'LOGOUT'
export const APPLYTOJOB = 'APPLYTOJOB'


export const loggedIn = (token) => {

    return {
        "type" : LOGGEDIN,
        "payload": token
    }
}

export const userNameTyped = (username) => {
    return {
        "type" : USERNAMETYPED,
        "payload" : username
    }
}
export const passwordTyped = (password) => {
    return {
        "type" : PASSWORDTYPED,
        "payload" : password
    }
}

export const themeSet = (theme)=>{
    return {
        "type" : SETTHEME,
        "payload" : theme
    }
}
export const logout = ()=>{

    return {
        "type" : LOGOUT,
    }
}

export const applyToJob = ()=>{
    return {
        "type" : APPLYTOJOB
    }
}
export const login = (username,password) => {
    const URL = 'http://127.0.0.1:8000/accounts/login'
    return function (dispatch) {
        let fd = new FormData()
        // let username = store.getState().typed_userName
        // let password = store.getState().typed_password
        fd.append('username', username)
        fd.append('password', password)
        return fetch(URL,{
            method:"POST",
            body:fd
        }) .then((response) => {
            console.log(response)
            return response.json()

        })
            .then(res => {
                console.log(res)
                let token = res.token
                localStorage.setItem('token', token)
                dispatch(loggedIn(token))
                console.log(token)
            })

    }
}
