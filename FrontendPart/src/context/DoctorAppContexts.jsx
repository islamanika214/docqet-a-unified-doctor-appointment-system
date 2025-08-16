import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DoctorAppContext = createContext();

const DoctorAppContextProvider = (props) => {
    const currencySymbol = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctorsList, setDoctorsList] = useState([]);

    const [token, setToken] = useState(
        localStorage.getItem("token") ? localStorage.getItem("token") : false
    );

    const [userData, setUserData] = useState(false);

    const getdoctorsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + "/api/doctor/list");
            if (data.success) {
                setDoctorsList(data.doctors);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + "/api/user/get-profile",
                { header: { token } }
            );
            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const doctorData = {
        doctorsList,
        currencySymbol,
        token,
        setToken,
        backendUrl,
        userData,
        setUserData,
        loadUserProfileData,
    };

    useEffect(() => {
        getdoctorsData();
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        } else {
            setUserData(false);
        }
    }, [token]);

    return (
        <DoctorAppContext.Provider value={doctorData}>
            {props.children}
        </DoctorAppContext.Provider>
    );
};

export default DoctorAppContextProvider;
