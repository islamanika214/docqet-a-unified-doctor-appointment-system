import { createContext } from "react";

export const DoctorAppContext = createContext();

const DoctorAppContextProvider = (props) => {
    const calculateAge = (dob) => {
        const today = new Date();
        const birtDate = new Date(dob);
        let age = today.getFullYear() - birtDate.getFullYear();
        return age;
    };
    const months = [
        "",
        "Jan",
        "Feb",
        "Mar",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const slotDateFormate = (slotDate) => {
        const dateArray = slotDate.split("_");
        return (
            dateArray[0] +
            " " +
            months[Number(dateArray[1])] +
            " " +
            dateArray[2]
        );
    };
    const value = {
        calculateAge,
        slotDateFormate,
    };
    return (
        <DoctorAppContext.Provider value={value}>
            {props.children}
        </DoctorAppContext.Provider>
    );
};

export default DoctorAppContextProvider;
