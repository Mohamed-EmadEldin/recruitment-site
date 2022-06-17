import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";

let Error = () => {
    return (
        <div className={'container'}>
            <div className="d-flex align-items-center justify-content-center vh-100">
                <div className="text-center">
                    <h1 className="display-1 fw-bold">404</h1>
                    <p className="fs-3"><span className="text-danger">OOps!</span> Page not found.</p>
                    <p className="lead">
                        The page you’re looking for does not exist.
                    </p>
                    <NavLink to={'/'} className={'btn'} >
                        <Button label={'Go Home'} className={'p-button-outlined p-button-rounded p-button-secondary'}> </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Error;