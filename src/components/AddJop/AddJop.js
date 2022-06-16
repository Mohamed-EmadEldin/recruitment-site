import {useEffect, useState} from "react";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from "primereact/button";
import {MultiSelect} from "primereact/multiselect";

import './AddJop.css'

let CreateForm = () => {

    let [token, setToken] = useState('');
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [image, setImage] = useState('')
    let [tags, setTags] = useState([])
    let [selectedTags, setSelectedTags] = useState(null);


    let create = async () => {
        let url = process.env.REACT_APP_CREATE_JOB
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token c0f676c51732e9a9f584e1958114cd42cae88b7b',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "name": name,
                "Description": description,
                "image": image,
                "created_by": 3, //TODO: remove after the new serializer
                "status": "O"
                //TODO: add tags
            })
        });
        return response.json();
    }

    let created = () => {
        alert('created')
    }

    let errorCreating = () => {
        alert(`error`)
    }

    let AddJop = async (Event) => {
        Event.preventDefault()
        if (!(token === '')) {
            await create().then(() => {
                created()
            }).catch(() => {
                errorCreating()
            })
        } else {
            alert('not authorized')
        }
    }

    let getTags = () => {
        return [
            {
                name: '1', code: 'one'
            },
            {
                name: '2', code: 'two'
            }
        ]
    }

    useEffect(() => {
        setToken(localStorage.getItem('token') || '')
        setTags(getTags())
    }, [])


    let loginForm = () => {
        return (
            <div className={'d-flex justify-content-center align-content-center vh-100'}>
                <form action="#"
                      className={'d-flex flex-column container border border-secondary border-opacity-50'}>
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
                        <InputTextarea id={"description"} rows={5} cols={30} className={'my-2 form-control'}
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
                        <MultiSelect id={"tags"} value={selectedTags} options={tags} className={'form-control'}
                                     onChange={(Event) => setSelectedTags(Event.value)} optionLabel="name"
                                     placeholder="Select tags" display="chip"/>
                        <small id="username1-help" className="text-start block">Enter job's image (url format).</small>
                    </div>
                    <Button onClick={AddJop} className={'my-4 p-button p-button-rounded align-self-start'}
                            type="submit">Add job</Button>
                </form>
            </div>
        )
    }

    return (
        loginForm()
    )
}

export default CreateForm;