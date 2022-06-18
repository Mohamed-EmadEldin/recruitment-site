import {Button} from "primereact/button";
import '../style.css'
import './Home.css'
import {NavLink} from "react-router-dom";

let Home = () => {
    const home = (
        <div className="grid grid-nogutter surface-0 text-800">
            <div className="col-6 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                <section>
                    <span className="block text-6xl font-bold mb-1">FossJobs</span>
                    <br/>
                    <span className="block text-6xl font-bold mb-1">Create the Jobs</span>
                    <div className="text-6xl text-primary font-bold mb-3">The best developers can complete</div>
                    <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <NavLink className={'btn'} to={'/signup'}>
                        <Button label="Signup" type="button" className="mr-3 p-button-raised p-button-rounded"/>
                    </NavLink>
                    <NavLink className={'btn'} to={'/jobs'}>
                        <Button label="see available jobs" type="button" className="p-button-outlined p-button-rounded"/>
                    </NavLink>
                </section>
            </div>
            <div className="col-6 md:col-6 overflow-hidden">
                <img src={"assets/images/home_image.png"} alt="home_image"
                     className="md:ml-auto block md:h-full align-items-center"
                     style={{clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)'}} draggable={"false"}/>
            </div>
        </div>
    )

    return (home)
}

export default Home
