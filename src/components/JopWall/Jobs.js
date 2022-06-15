import {useEffect, useState} from "react";
import JobCard from "./JobCard";

import '../style.css'
import './Job.css'

let AllJobs = () => {
    let [jobs, setJobs] = useState([]);

    const error = (err) => {
        return (
            <div className={'alert alert-error'}>
                <p className={'h3'}>{`oOps, ${err}, try again later`}</p>
            </div>
        )
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_JOBS_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setJobs(data)
            })
            .catch((err) => {
                error(err)
            })
    }, [])

    const renderSingers = () => {
        if(jobs.length > 0){
            return jobs.map((job) => {
                return (
                    <JobCard key={job.id} job={job}></JobCard>
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

export default AllJobs;