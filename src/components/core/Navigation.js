import {NavLink} from "react-router-dom"; //useLocation
import {Button} from "primereact/button";
import {useSelector} from "react-redux";


const Navigation = () => {

    const state = useSelector((state)=>state)

    // let location = useLocation();

    // if(location.pathname === '/'){
    //     return null
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-expand-md mx-5">
            <NavLink to={""}>
                <label className="mx-2 ">Foss Jobs</label>
            </NavLink>
            <button aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation"
                    className="navbar-toggler" data-bs-target="#navbarToggler" data-bs-toggle="collapse" type="button">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarToggler">
                <ul className="navbar-nav">
                    <li className="nav-item px-3">
                        <NavLink to={"/about"} className={'btn'}>
                            <Button label={'About'} className="p-button p-button-sm p-button-text p-button-info"></Button>
                        </NavLink>
                        {state.token ? null : <NavLink to={"/login"} className={'btn'}>
                            <Button label={'login'} className="p-button p-button-sm p-button-text p-button-info"></Button>
                        </NavLink>}
                       <NavLink to={"/jobs"} className={'btn'}>
                            <Button label={'jobs wall'} className="p-button p-button-sm p-button-text p-button-info"></Button>
                        </NavLink>
                        {state.user_type === 'COMPANY'?
                            <NavLink to={"/create"} className={'btn'}>
                                <Button label={'add a job'} className="p-button p-button-sm p-button-text p-button-info"></Button>
                            </NavLink>
                            :null}
                        {state.user_type === 'COMPANY' ?
                            <NavLink to={"/myjobs"} className={'btn'}>
                                <Button label={'my jobs'}
                                        className="p-button p-button-sm p-button-text p-button-info"></Button>
                            </NavLink>
                            : null}

                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;