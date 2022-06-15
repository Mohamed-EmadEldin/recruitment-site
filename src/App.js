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


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Signup/>}></Route>
                    <Route path={"signup"} element={<Signup/>}></Route>
                    <Route path={"login"} element={<Login/>}></Route>
                    <Route path={"profile"} element={<Profile/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
