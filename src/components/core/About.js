import {NavLink} from "react-router-dom";
import {Button} from "primereact/button";

let About = () => {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 text-center">
            <div className="px-3">
                <h1>Foss Jobs</h1>
                <p className="lead">Free Open Source Software Jobs...</p>
                <br/>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ipsum nunc,
                    rhoncus quis euismod nec, dictum eget arcu. Sed efficitur justo quis ante tincidunt, et euismod
                    risus porta. Donec efficitur nibh nec tellus placerat, vitae blandit ex auctor. Fusce et iaculis
                    velit. Proin vel nisl id urna porttitor rhoncus ut convallis justo. Aliquam accumsan non justo
                    ac rhoncus. Mauris ac enim libero. Nam feugiat pharetra metus, id convallis libero. In commodo
                </p>
                <div className="d-flex justify-content-center">
                    <NavLink className={'btn'} to={"/jobs"}>
                        <Button label={'home'} className={'p-button p-button-rounded p-button-outlined p-button-primary'}></Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default About;