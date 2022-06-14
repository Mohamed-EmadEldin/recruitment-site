import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";

import Signup from "./components/signup";
import Login from "./components/login";
import Sign from "./components/layout/forms/Sign";


function App() {
  return (
    <div className="App">
      <Signup></Signup>
    </div>
  );
}

export default App;
