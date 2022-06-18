import {useEffect, useState} from "react";
import MyJobCard from "./myJobCard";

import '../style.css'
import './jobs.css'
import axios from "axios";
import {useSelector} from "react-redux";

let MyJobs = () => {
    let [jobs, setJobs] = useState([]);
   const token = useSelector((state)=>state.token)
    const error = (err) => {
        return (
            <div className={'alert alert-error'}>
                <p className={'h3'}>{`oOps, ${err}, try again later`}</p>
            </div>
        )
    }

    useEffect(() => {

        axios.get("http://127.0.0.1:8000/jobs/myjobs")
            .then((response) => {
                console.log(response.data)

                setJobs(response.data)
                console.log(token)
            })
            .catch((err) => {
                error(err)
            })
    }, [])

    const renderSingers = () => {
        if(jobs.length > 0){
            return jobs.map((job) => {
                return (
                    <MyJobCard key={job.id} job={job}></MyJobCard>
                )
            })
        }else{
            setTimeout(()=>{
                return (
                    <div className={'container alert  alert-danger text-center'}>no data</div>
                )
            },1000)
        }
    }

    return (
        <div className="d-flex flex-wrap align-items-center justify-content-center vh-100 jobs">
            {renderSingers()}
        </div>
    )

}

export default MyJobs;