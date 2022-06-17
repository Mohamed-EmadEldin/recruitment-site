import {useEffect, useState} from "react";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from "primereact/button";
import {MultiSelect} from "primereact/multiselect";

import './AddJop.css'
import axios from "axios";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

let CreateForm = () => {

    let [token, setToken] = useState('');
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [image, setImage] = useState('')
    let state = useSelector(state => state)
    const [availableTags, setavaliableTags] = useState([])
    const [tags, setTags] = useState('')
    const navigate = useNavigate()

    let create = async () => {
        let url = "http://localhost:8000/jobs/create"
        const fd = new FormData()
        fd.append('name',name)
        fd.append('Description',description)
        fd.append('image',image)
        // fd.append('status',"O")

        for(let tag of tags) {
            fd.append('tags',tag.toString())
        }
        fd.append('created_by',state.user_id.toString())
        const response = await axios.post(url, /*{
                "name": name,
                "Description": description,
                "image": image,
                // "created_by": 3, //TODO: remove after the new serializer
                "status": "O",
                "tags":selectedTags.map(tag => tag.id.toString()),
                "created_by":state.user_id.toString()
            }*/
       fd );
        return response.json();
    }

    let created = () => {
        alert('created')
    }

    let error = () => {
        alert(`error`)
    }

    let AddJop = async (Event) => {
        Event.preventDefault()
        if (!(token === '')) {
            await create().then(() => {
                created()
            }).catch(() => {
                error()
            })
        } else {
            alert('not authorized')
        }
    }

    // useEffect(() => {
    //     setToken(localStorage.getItem('token') || '');
    //     if (!(token === '')) {
    //         let url = process.env.REACT_APP_TAGS_URL
    //         fetch(url, {
    //             method: 'GET'
    //         }).then(response => response.json())
    //             .then(data => setTags(data))
    //             .catch(e => console.log(e))
    //     }
    // }, [token])
    useEffect(() => {
        setToken(localStorage.getItem('token') || '')
        axios.get('http://127.0.0.1:8000/tags/list')
            .then((res) => {
                console.log(res.data.map(generateAvalableTalsList))
                setavaliableTags(res.data.map(generateAvalableTalsList))
            })
    }, [])

    const handleSubmit = (e)=>{
        e.preventDefault()
        let url = "http://localhost:8000/jobs/create"
        const fd = new FormData()
        fd.append('name',name)
        fd.append('Description',description)
        fd.append('image',image)
        // fd.append('status',"O")

        for(let tag of tags) {
            fd.append('tags',tag.toString())
        }
        fd.append('created_by',state.user_id.toString())
        axios.post(url,fd).then((response)=>{
            console.log(response.data)
            navigate('/jobs')
        })
    }
    let loginForm = () => {
        return (
            <form action="#"
                  className={'create-form d-flex flex-column container border border-secondary border-opacity-50'}
            onSubmit={handleSubmit}
            >
                <p className={'h4 text-center'}>Create Job</p>
                <div className="field">
                    <label htmlFor="job-name" className="text-start block">Job name</label>
                    <InputText type={'text'} id={'job-name'} className={'my-2 form-control'}
                               onChange={(Event) => {
                                   setName(Event.target.value)
                               }}
                    />
                    <small id="jop-name-help" className="text-start block">Enter the job's name.</small>
                </div>
                <div className="field">
                    <label htmlFor="description" className="text-start block">Description</label>
                    <InputTextarea id={"description"} rows={3} cols={30} className={'my-2 form-control'}
                                   maxLength={250} autoResize
                                   onChange={(Event) => {
                                       setDescription(Event.target.value)
                                   }}
                    />
                    <small id="description-help" className="text-start block">Enter job's description (max 250
                        char).</small>
                </div>
                <div className="field">
                    <label htmlFor="image" className="text-start block">Image url</label>
                    <InputText type={'text'} id={'image'} className={'my-2 form-control'}
                               onChange={(Event) => {
                                   setImage(Event.target.value)
                               }}
                    />
                    <small id="username1-help" className="text-start block">Enter job's image (url format).</small>
                </div>
                <div className="field">
                    <label htmlFor="tags" className="text-start block">tags</label>
                    {/*<MultiSelect id={"tags"} value={selectedTags} options={tags} className={'form-control'}*/}
                    {/*             onChange={(Event) => {setSelectedTags(Event.value)*/}
                    {/*                 console.log(selectedTags)*/}
                    {/*             }} optionLabel="name"*/}
                    {/*              display="chip"/>*/}
                    <MultiSelect value={tags} options={availableTags} onChange={(e) => setTags(e.value)}/>

                    <small id="username1-help" className="text-start block">choose tags from list.</small>
                </div>
                <Button  className={'my-4 p-button p-button-rounded align-self-start'}
                        type="submit">Add job</Button>
            </form>
        )
    }
    const generateAvalableTalsList = (tag) => ({
        label: tag.name, value: tag.id
    })
    return (
        <div className={'create-form d-flex justify-content-center align-content-center vh-100'}>
            {loginForm()}
        </div>
    )
}

export default CreateForm;