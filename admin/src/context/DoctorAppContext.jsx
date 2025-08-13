import { createContext } from "react";

export const DoctorAppContext = createContext();

const DoctorAppContextProvider = (props) => {
    const value = {};
    return (
        <DoctorAppContext.Provider value={value}>
            {props.children}
        </DoctorAppContext.Provider>
    );
};

export default DoctorAppContextProvider;
