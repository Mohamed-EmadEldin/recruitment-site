import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./store/reducer";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import "primereact/resources/themes/vela-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import "primeflex/primeflex.css";
import axios from "axios";

const root = ReactDOM.createRoot(document.getElementById('root'));

axios.interceptors.request.use((request) => {
    let token = localStorage.getItem('token')
    console.log(token)
    request.headers.Authorization = "Token "+token
    console.log(request)
    return request
})
axios.interceptors.response.use((response) => {

    return response
})

root.render(
 <Provider store={store}>
    <App />
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
