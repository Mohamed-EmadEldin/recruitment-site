import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Signup from "./components/signup";
import Login from "./components/login";
import Jobs from "./components/JopWall/Jobs";
import JobDetails from "./components/JobDetails/JobDetails"
import About from "./components/core/About";
import Error from "./components/core/Error";
import Navigation from "./components/core/Navigation";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <Routes>
                    <Route path={"/"} element={<Signup/>}></Route>
                    <Route path={"signup"} element={<Signup/>}></Route>
                    <Route path={"login"} element={<Login/>}></Route>
                    <Route path={"jobs"} element={<Jobs/>}></Route>
                    <Route path={"jobs/:id"} element={<JobDetails/>}></Route>
                    <Route path={"about"} element={<About/>}></Route>
                    <Route path={"*"} element={<Error/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
