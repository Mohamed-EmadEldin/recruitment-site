import {useEffect, useState} from "react";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {Image} from "primereact/image";
import {Button} from "primereact/button";

import './JobDetails.css'
import {useSelector} from "react-redux";
import axios from "axios";

let MyJobDetails = () => {

    let [job, setJob] = useState([])
    let [employees, setEmployees] = useState([])
    let {id} = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        let url = process.env.REACT_APP_JOB_DETAILS_URL + id
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setJob(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const assignTo = (e)=>{
        axios.post(`http://127.0.0.1:8000/jobs/assign/${job.id}/developer/${e.target.value}`).then(
            ()=>{
                alert(`job has been submitted to ${e.target.value}`)
            }
        )
    }
    const renderEmployees = (employees) => {
        return employees.map((employee) => {
            return (<li><button onClick={assignTo} value={employee.id}> {`assign to ${employee.id}`} </button></li>)
        })
    }
    let error = (err) => {
        return (<div className={'alert alert-error'}>
            <p className={'h3'}>{`oOps, ${err} happened, try again later`}</p>
        </div>)
    }
    const state = useSelector(state => state)
    const markFinish = ()=>{
        axios.post(`http://127.0.0.1:8000/jobs/finish/${job.id}`).then(
            ()=>{
                navigate('/myjobs')
            }
        )
    }

    const backButton = (
        <NavLink to={'/jobs'} className={'btn'}>
            <Button className={'p-button p-button-outlined p-button-rounded'}
                    label={'Back'}></Button>
        </NavLink>
    )
    const finishButton = (
        <NavLink to={'/jobs'} className={'btn'}>
            <Button className={'p-button p-button-outlined p-button-rounded'}
                    label={'mark finish'} onClick={markFinish}></Button>
        </NavLink>
    )



    let renderJob = () => {
        if (job.id) {
            return (
                <div className={'details my-5 py-5 vh-10 row'}>
                    <div
                        className={'d-flex align-items-center justify-content-center text-center row col-lg-11 col-sm-12'}>
                        <div className={'d-flex-column col-sm-12 col-lg-6 col-md-6 order-1 order-lg-0 order-md-0'}>
                            <p className={'h3'}>
                                {job.name}
                            </p>
                            <p>

                                {job.Description}
                            </p>
                            <h2> Developers </h2>
                            {job.status === 'IN' ?  <p> Job is assigned to {job.applied_developer[0].id}</p> : null}
                            {job.status === 'O' ?  renderEmployees(job.applied_developer): null}
                            {job.status === 'F' ?  <p> Job is Done</p> : null}
                        </div>
                        <div className={'col-sm-12 col-lg-6 col-md-6 order-0 order-lg-1 order-md-1'}>
                            <Image preview className={'rounded img-fluid'} name={`${job.name} image`} width={'200'}
                                   alt={`${job.name}`} src={job.image}></Image>
                            <h2>{job.status}</h2>
                        </div>
                    </div>
                    <div className={'d-flex flex-column col-lg-1 justify-content-center'}>
                        {backButton}
                    </div>
                    <div className={'d-flex flex-column col-lg-1 justify-content-center'}>
                        { job.status != 'F' ?  finishButton: null}
                    </div>
                </div>
            )
        } else {
            error('no data')
        }
    }

    return (renderJob())
}

export default MyJobDetails