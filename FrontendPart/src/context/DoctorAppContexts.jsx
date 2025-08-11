import { createContext } from "react";
import { doctorsList } from "../assets/assets";


export const DoctorAppContext = createContext()


const DoctorAppContextProvider = (props) => {

    const currencySymbol = '$'

    const doctorData ={
        doctorsList, currencySymbol

    }
    return(
        <DoctorAppContext.Provider value={doctorData}>
            {props.children}
        </DoctorAppContext.Provider>
    )
} 

export default DoctorAppContextProvider