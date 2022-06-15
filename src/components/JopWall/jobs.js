import {useEffect, useState} from "react";
import JobCard from "./JobCard";


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
        fetch('http://localhost:8000/jobs/list')
            .then((response) => {
                console.log(response)
                return response.json()
            })
            .then((data) => {
                console.log('data')
                console.log(data)
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
        <div className="d-flex flex-wrap align-items-center justify-content-center vh-100">
            {renderSingers()}
        </div>
    )

}

export default AllJobs;