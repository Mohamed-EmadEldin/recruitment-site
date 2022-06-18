import React, {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable';
import axios from "axios";
import {Button} from "primereact/button";
import {Column} from "primereact/column";

let Notifications = () => {

    const [notifications, setNotifications] = useState([])
    const [token, setToken] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem('token') || '')
        if(!(token === '')){
            let url = process.env.REACT_APP_NOTIFICATIONS_URL
            axios.get(url, {headers:{
                    'Authorization': `Token ${token}`
                }})
                .then(response => {
                    setNotifications(response.data)
                }, error => {
                    alert('error retrieving notifications')
                    console.log(error)
                })
        }
    }, [token])

    const paginatorLeft = <Button type="button" icon="pi pi-refresh" className="p-button-text" />;
    const paginatorRight = <Button type="button" icon="pi pi-cloud" className="p-button-text" />;

    return (
        <div className="card notifications">
            <DataTable value={notifications} paginator responsiveLayout="scroll"
                       paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                       currentPageReportTemplate="Showing {first} to {last} of {totalRecords}" rows={8}
                       paginatorLeft={paginatorLeft} paginatorRight={paginatorRight}>
                <Column field='name' header="Name" style={{ width: '25%' }}></Column>
                <Column field='message' header="Message" style={{ width: '75%' }}></Column>
            </DataTable>
        </div>
    )
}
export default Notifications;
