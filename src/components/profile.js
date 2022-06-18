import React, {useEffect, useState} from "react";
import {Button} from "primereact/button";
import {SelectButton} from "primereact/selectbutton";
import "../../node_modules/primeflex/primeflex.css";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {themeSet} from "../store/actions";

const userData = {
    user_name: "Emad1234",
    first_name: "Emad",
    last_name: "Mohamed",
    email: "emad1234@emial.com",
    last_login: "11:00pm 1/2/1111",
    user_type: "DEVELOPER",
    gender: "MALE",
    date_of_Birth: "1/1/1111",
    developer: {
        cv: "link",
    },
};

const companyData = {
    user_name: "Emad1234",
    first_name: "Emad",
    last_name: "Mohamed",
    email: "emad1234@emial.com",
    last_login: "11:00pm 1/2/1111",
    user_type: "COMPANY",
    gender: "MALE",
    date_of_Birth: "1/1/1111",
    company: {
        history: "link",
        address: "Alex",
    },
};

const Profile = () => {
    const [profileData, setProfileData] = useState(companyData);
    // const { user_type, first_name, last_name, gender, email, company } =
    //   profileData;
    const state = useSelector((state) => state)
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/accounts/profile")
            .then((response) => {
                let data = response.data
                console.log(data)
                setProfileData(data)
                let theme = {}
                theme.user_type = data.user_type
                theme.can_apply = (data.user_type === 'DEVELOPER')? data.developer.can_apply : false
                theme.username= data.username
                theme.user_id = (data.user_type === 'DEVELOPER') ?  data.developer.id :  data.company.id
                dispatch(themeSet(theme))
                console.log(state)
            })
    }, []);

    const genderList = [
        {label: "Male", value: "MALE"},
        {label: "Female", value: "Female"},
    ];
    return (
        <div className="surface-section">
            <div className="font-medium text-3xl text-900 mb-3">
                {profileData.user_name} profile
            </div>
            <div className="text-500 mb-5">
                All {profileData.user_type} information data
            </div>
            <ul className="list-none p-0 m-0">
                <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">First Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                        {profileData.first_name}
                    </div>
                    {/* <div className="w-6 md:w-2 flex justify-content-end">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-text"
            />
          </div> */}
                </li>
                <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Last Name</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                        {profileData.last_name}
                    </div>
                    {/* <div className="w-6 md:w-2 flex justify-content-end">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-text"
            />
          </div> */}
                </li>
                {profileData.user_type === "DEVELOPER" && (
                    <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                        <div className="text-500 w-6 md:w-2 font-medium">Genre</div>
                        <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                            <p> {profileData.gender}</p>
                        </div>
                        {/* <div className="w-6 md:w-2 flex justify-content-end">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-text"
            />
          </div> */}
                    </li>
                )}
                <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                    <div className="text-500 w-6 md:w-2 font-medium">Email</div>
                    <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                        {profileData.email}
                    </div>
                    {/* <div className="w-6 md:w-2 flex justify-content-end">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-text"
            />
          </div> */}
                </li>
                {profileData.user_type === "COMPANY" && (
                    <>
                        <li className="flex align-items-center py-3 px-2 border-top-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">History</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">
                                {profileData.company.history}
                            </div>
                            {/* <div className="w-6 md:w-2 flex justify-content-end">
                <Button
                  label="Edit"
                  icon="pi pi-pencil"
                  className="p-button-text"
                />
              </div> */}
                        </li>
                        <li className="flex align-items-center py-3 px-2 border-top-1 border-bottom-1 surface-border flex-wrap">
                            <div className="text-500 w-6 md:w-2 font-medium">Address</div>
                            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1 line-height-3">
                                {profileData.company.address}
                            </div>
                            {/* <div className="w-6 md:w-2 flex justify-content-end">
                <Button
                  label="Edit"
                  icon="pi pi-pencil"
                  className="p-button-text"
                />
              </div> */}
                        </li>
                    </>
                )}
            </ul>
        </div>
    );
};

export default Profile;
