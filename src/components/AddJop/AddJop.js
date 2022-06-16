import {useEffect, useState} from "react";
import {InputText} from 'primereact/inputtext';
import {InputTextarea} from 'primereact/inputtextarea';


let CreateForm = () => {

    let [token, setToken] = useState('');
    let [name, setName] = useState('')
    let [description, setDescription] = useState('')
    let [image, setImage] = useState('')


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

    useEffect(() => {
        setToken(localStorage.getItem('token') || '')
    }, [])

    let loginForm = () => {
        return (
            <div className={'d-flex justify-content-center align-content-center vh-100'}>
                <form action="#">
                        <span className="p-float-label">
                        <InputText type={'text'} id={'name'} className={'my-2'}
                                   onChange={(Event) => {
                                       setName(Event.target.value)
                                   }}
                        />
                                <label htmlFor="name">Job name</label>
                        </span>
                    <span className={'p-float-label'}>
                    <InputTextarea rows={5} cols={30} className={'my-2'} maxLength={250} autoResize
                                   onChange={(Event) => {
                                       setDescription(Event.target.value)
                                   }}
                    />
                            <label htmlFor="description">Description</label>
                    </span>
                    <span className="p-float-label">
                        <InputText type={'text'} id={'image'} className={'my-2'}
                                   onChange={(Event) => {
                                       setImage(Event.target.value)
                                   }}
                        />
                                    <label htmlFor="image">Job image</label>
                        </span>
                    <button onClick={AddJop} className={'btn btn-primary'} type="submit">Add jop</button>

                </form>
            </div>
        )
    }

    return (
        loginForm()
    )
}

export default CreateForm;