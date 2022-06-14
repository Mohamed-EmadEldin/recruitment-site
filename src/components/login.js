import {useEffect, useState} from "react";
// import axios from "axios";
import {useDispatch} from "react-redux";
import {login, passwordTyped, userNameTyped} from "../store/actions";


function Login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    // const [cv, setUser] = useState('')



    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(login(username,password))
        // const fd = new FormData()
        // fd.append('username',username)
        //
        // fd.append('password',password)
        //
        // try {
        //     // let res = await axios({
        //     //     method: 'post',
        //     //     url: 'http://127.0.0.1:8000/accounts/signup',
        //     //     data: fd,
        //     //     headers: {
        //     //         'Content-Type': `multipart/form-data`,
        //     //         // 'Access-Control-Allow-Origin': '*',
        //     //     },
        //     // })
        //     let res = await  axios.post('http://127.0.0.1:8000/accounts/login',fd)
        //     console.log('ress',JSON.stringify(res.data))
        // } catch (err){
        //     console.log( 'err' , err)
        // }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name={'username'}
                    placeholder={'username'}
                    type={'text'}
                    required={true}
                    value={username}
                    onChange={(e) => {
                        setUserName(e.target.value)
                        dispatch(userNameTyped(username))
                        console.log(username)
                    }}
                />

                <input
                    name={'password'}
                    placeholder={'password'}
                    type={'password'}
                    required={true}
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                        dispatch(passwordTyped(password))
                    }}
                />
               <button type={'submit'}> submit</button>
            </form>
        </div>
    )
}

export default Login