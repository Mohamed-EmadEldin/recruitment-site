import {useState} from "react";
import axios from "axios";

function Signup() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [file, setfile] = useState(null)
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [cv, setUser] = useState('')
    const [tags, setTags] = useState('')
    const [gender, setGender] = useState('')
    const [userType, setUserType] = useState('')
    const [dataOfBirth, setBOD] = useState('')

    const fileHandler = (e) => {
        setfile(e.target.files[0])
        console.log(e.target.files[0])
        console.log(file.name)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const fd = new FormData()
        fd.append('username',username)
        fd.append('user_type',userType)
        fd.append('email',email)
        fd.append('password',password)
        fd.append('cv',file,'cv')
        fd.append('gender',gender)
        fd.append('tags',tags)
        fd.append('date_of_birth',dataOfBirth)
        try {
            // let res = await axios({
            //     method: 'post',
            //     url: 'http://127.0.0.1:8000/accounts/signup',
            //     data: fd,
            //     headers: {
            //         'Content-Type': `multipart/form-data`,
            //         // 'Access-Control-Allow-Origin': '*',
            //     },
            // })
            let res = await  axios.post('http://127.0.0.1:8000/accounts/signup',fd)
            console.log('ress',JSON.stringify(res.data))
        } catch (err){
            console.log( 'err' , err)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name={'username'}
                    placeholder={'username'}
                    type={'text'}
                    required={true}
                    onChange={(e) => {
                        setUserName(e.target.value)
                        console.log(username)
                    }}
                />
                <input
                    name={'email'}
                    placeholder={'email'}
                    type={'email'}
                    required={true}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}/>
                <input
                    name={'password'}
                    placeholder={'password'}
                    type={'password'}
                    required={true}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                />
                <select name="user_type" id="" onChange={(e) => {
                    setUserType(e.target.value)
                }} >
                    <option></option>
                    <option value={'DEVELOPER'}> developer</option>
                    <option value={'COMPANY'}>comp</option>
                </select>
                <select name="gender" id="" onChange={(e) => {
                    setGender(e.target.value)
                }}>
                    <option></option>
                    <option value={'MALE'}> male</option>
                    <option value={'FEMALE'}>female</option>
                </select>
                <select name="tags" id="" onChange={(e) => {
                    setTags(e.target.value)
                }}>
                    <option></option>
                    <option value={2}> 2</option>
                    <option value={1}>1</option>
                </select>
                <input
                    type={"date"}
                    name={'date_of_birth'}
                    onChange={(e) => {
                        setBOD(e.target.value)
                    }}
                />
                <input type="file" name="cv" onChange={fileHandler}/>
                <button type={'submit'}> submit</button>
            </form>
        </div>
    )
}

export default Signup