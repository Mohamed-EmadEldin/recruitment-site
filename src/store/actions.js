import axios from "axios";
// import {useSelector} from "react-redux";
// import {store} from "./reducer";

export const LOGIN = 'LOGIN'
export const LOGGEDIN = 'LOGEDIN'
export const USERNAMETYPED = 'USERNAMETYPED'
export const PASSWORDTYPED = 'PASSWORDTYPED'
export const SETTHEME = 'SETTHEME'
export const LOGOUT = 'LOGOUT'


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
        "payload" : ''
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
        return fetch({
            method:'POST',
            data:fd
        }).then((res)=>{
            console.log(res)
            return res.json()
        })
            .then(res => {
                // let token = res.data.token
                // localStorage.setItem('token', token)
                // dispatch(loggedIn(token))
                // console.log(token)
                console.log(res)
            })

    }
}
