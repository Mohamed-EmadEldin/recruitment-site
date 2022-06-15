import {NavLink, useLocation} from "react-router-dom";
import {Button} from "primereact/button";

const Navigation = () => {

    let location = useLocation();

    if(location.pathname === '/'){
        return null
    }

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
                            <Button label={'about'} className="p-button p-button-sm p-button-text p-button-info"></Button>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;