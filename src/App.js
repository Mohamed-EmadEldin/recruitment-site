import logo from './logo.svg';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import Signup from "./components/signup";
import Login from "./components/login";
import Profile from './components/profile';
// import Sign from "./components/layout/forms/Sign";
import Jobs from "./components/JopWall/Jobs";
import JobDetails from "./components/JobDetails/JobDetails"
import About from "./components/core/About";
import Error from "./components/core/Error";
import Navigation from "./components/core/Navigation";
import Home from "./components/home/Home";
import AddJop from "./components/AddJop/AddJop";
import Notifications from "./components/notifications/Notifications";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={<Signup/>}></Route>
                    <Route path={"signup"} element={<Signup/>}></Route>
                    <Route path={"login"} element={<Login/>}></Route>
                    <Route path={"profile"} element={<Profile/>}></Route>
                    <Route path={"jobs"} element={<Jobs/>}></Route>
                    <Route path={"jobs/:id"} element={<JobDetails/>}></Route>
                    <Route path={"about"} element={<About/>}></Route>
                    <Route path={"create"} element={<AddJop/>}></Route>
                    <Route path={"notifications"} element={<Notifications/>}></Route>
                    <Route path={"*"} element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
