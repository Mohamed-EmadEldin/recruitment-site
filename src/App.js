import {BrowserRouter, Route, Routes} from "react-router-dom";

import './App.css';

import Signup from "./components/signup";
import Login from "./components/login";
import Jobs from "./components/JopWall/Jobs";
import JobDetails from "./components/JobDetails/JobDetails"
// import Sign from "./components/layout/forms/Sign";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Signup/>}></Route>
                    <Route path={"signup"} element={<Signup/>}></Route>
                    <Route path={"login"} element={<Login/>}></Route>
                    <Route path={"jobs"} element={<Jobs/>}></Route>
                    <Route path={"jobs/:id"} element={<JobDetails/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
