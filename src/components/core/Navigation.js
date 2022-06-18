import {NavLink, useNavigate} from "react-router-dom"; //useLocation
import {Button} from "primereact/button";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {LOGOUT, logout} from "../../store/actions";


const Navigation = () => {

    const state = useSelector((state)=>state)
    const navigate = useNavigate()

    // let location = useLocation();

    // if(location.pathname === '/'){
    //     return null
    // }
    const dispatch = useDispatch()
    const hitLogout = () => {
        // axios({
        //     method: 'get',
        //         url: "http://127.0.0.1:8000/accounts/logout",
        //     //     data: fd,
        //         headers: {
        //             // 'Content-Type': `multipart/form-data`,
        //             'Access-Control-Allow-Origin': '*',
        //         },
        // })
        fetch("http://127.0.0.1:8000/accounts/logout",{
            mode:"no-cors",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then(()=>{
                dispatch({
                    "type" : LOGOUT,
                })
                console.log(state)
                localStorage.removeItem('token')
                navigate('/')
            }

        )
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
                        {state.user_type === 'DEVELOPER' ?
                            <NavLink to={"/notifications"} className={'btn'}>
                                <Button label={'notifications'}
                                        className="p-button p-button-sm p-button-text p-button-info"></Button>
                            </NavLink>


                            : null}
                        {state.token  ?
                            <Button label={'logout'} className="p-button p-button-sm p-button-text p-button-info" onClick={hitLogout}></Button>
                        :null}

                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navigation;