import axios from "axios";
import { createContext } from "react";

import { useState } from "react";

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
            const { data } = await axios.get(backendUrl + "api/doctor/list");
            if (data.success) {
                setDoctorsList(data.doctorsList);
            }
        } catch (error) {}
    };
    return (
        <DoctorAppContext.Provider value={doctorData}>
            {props.children}
        </DoctorAppContext.Provider>
    );
};

export default DoctorAppContextProvider;
