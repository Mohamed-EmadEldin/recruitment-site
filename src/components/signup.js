import {useState, useEffect} from "react";
import axios from "axios";

import {Card} from 'primereact/card';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputText} from 'primereact/inputtext';
import {Calendar} from 'primereact/calendar';
import {SelectButton} from "primereact/selectbutton";


import {MultiSelect} from 'primereact/multiselect';


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
    const [availableTags, setavaliableTags] = useState([])
    const [history, setHistory] = useState([])
    const [address, setAddress] = useState([])

    const genderList = [
        {label: 'Male', value: 'MALE'},
        {label: 'Female', value: 'Female'},
    ];

    const userTypeList = [
        {label: 'Developer', value: 'DEVELOPER'},
        {label: 'Company', value: 'COMPANY'},
    ];


    const fileHandler = (e) => {
        setfile(e.target.files[0])
        console.log(e.target.files[0])
        console.log(file.name)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append('username', username)
        fd.append('user_type', userType)
        fd.append('email', email)
        fd.append('password', password)


        fd.append('gender', gender)
        fd.append('date_of_birth', dataOfBirth)
        if (userType === 'DEVELOPER') {
            fd.append('cv', file, 'cv')
            for(let tag of tags){
                fd.append('tags', tag.toString())
            }


        } else {
            fd.append('history', history)
            fd.append('address', address)
        }
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
            let res = await fetch('http://127.0.0.1:8000/accounts/signup', {
                method:"POST",
                body:fd
            })
            console.log('ress', JSON.stringify(res.data))
        } catch (err) {
            console.log('err', err)
        }
    }
    useEffect(() => {
        fetch('http://127.0.0.1:8000/tags/list')
            .then((res)=>{
                console.log(res)
              return  res.json()
            })
            .then((res) => {
                console.log(res)
                setavaliableTags(res.map(generateAvalableTalsList))
            })
    }, [])
    /* Helper functions*/
    const renderOptions = () => {
        return availableTags.map(tag => {
            return <option value={tag.id}>{tag.name}</option>
        })
        // return <option>{av}</option>
    }

    const generateAvalableTalsList = (tag) => ({
        label: tag.name, value: tag.id
    })

    const formateDate = (dateObj) => {
        let month = dateObj.getUTCMonth() + 1; //months from 1-12
        let day = dateObj.getUTCDate();
        let year = dateObj.getUTCFullYear();

        return year + "-" + month + "-" + day;
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
                        onChange={(e) => {
                            setUserName(e.target.value)
                            console.log(username)
                        }}
                    />
                    <InputText
                        name={'email'}
                        placeholder={'email'}
                        type={'email'}
                        required={true}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}/>
                    <InputText
                        name={'password'}
                        placeholder={'password'}
                        type={'password'}
                        required={true}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    {/*<select name="gender" id="" onChange={(e) => {*/}
                    {/*    setGender(e.target.value)*/}
                    {/*}}>*/}


                    {/*    <option></option>*/}
                    {/*    <option value={'MALE'}> male</option>*/}
                    {/*    <option value={'FEMALE'}>female</option>*/}
                    {/*</select>*/}

                    <SelectButton value={gender} options={genderList}
                                  onChange={(e) => setGender(e.value)}></SelectButton>

                    <Calendar
                        type={"date"}
                        name={'date_of_birth'}
                        onChange={(e) => {
                            setBOD(formateDate(new Date(e.target.value)))
                            // console.log(  )
                            // console.log(new Intl.DateTimeFormat("iso").format(e.target.value + 'T00:00:00' ))
                        }}
                        placeholder={'Date of Birth'}
                        dateFormat="yy/mm/dd"
                    />
                    {/*<select name="user_type" id="" onChange={(e) => {*/}
                    {/*    setUserType(e.target.value)*/}
                    {/*}}>*/}
                    {/*    <option></option>*/}
                    {/*    <option value={'DEVELOPER'}> developer</option>*/}
                    {/*    <option value={'COMPANY'}>comp</option>*/}
                    {/*</select>*/}

                    <SelectButton value={userType} options={userTypeList}
                                  onChange={(e) => setUserType(e.value)}></SelectButton>

                    {
                        userType == 'DEVELOPER' ?
                            <div>


                                <MultiSelect value={tags} options={availableTags} onChange={(e) => setTags(e.value)}/>

                                <input type="file" name="cv" onChange={fileHandler}/>
                            </div> : null


                    }
                    {userType == 'COMPANY' ?
                        <div>
                            <InputText type="text" name={'address'} placeholder={'address'}
                                       onChange={(e) => setAddress(e.target.value)}/>
                            <InputTextarea name={'history'} rows={5} cols={30} value={history}
                                           onChange={(event) => setHistory(event.target.value)}
                                           autoResize></InputTextarea>
                        </div> : null}

                    <button type={'submit'}> submit</button>
                </form>
            </div>
        </Card>
    )
}

export default Signup