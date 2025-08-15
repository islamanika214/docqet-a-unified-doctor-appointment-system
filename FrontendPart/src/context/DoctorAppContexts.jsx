import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const DoctorAppContext = createContext();

const DoctorAppContextProvider = (props) => {
    const currencySymbol = "$";
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [doctorsList, setDoctorsList] = useState([]);

    const doctorData = {
        doctorsList,
        currencySymbol,
    };

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

    useEffect(() => {
        getdoctorsData();
    }, []);
    return (
        <DoctorAppContext.Provider value={doctorData}>
            {props.children}
        </DoctorAppContext.Provider>
    );
};

export default DoctorAppContextProvider;
