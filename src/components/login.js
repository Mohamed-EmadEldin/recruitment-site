import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {Card} from 'primereact/card';
import {InputText} from "primereact/inputtext";

import {login, passwordTyped, userNameTyped} from "../store/actions";



function Login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const [cv, setUser] = useState('')
    const navigate = useNavigate()



    const handleSubmit = async (e)=>{
        e.preventDefault()
        dispatch(login(username,password)).then(() => {
           // navigate("/profile")
        })
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
        <Card className={'form-card'}>
        <div>
            <form onSubmit={handleSubmit} className={'form-container'}>
                <InputText
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

                <InputText
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
        </Card>
    )
}

export default Login