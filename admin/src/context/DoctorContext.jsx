import { createContext, useState } from "react";

import axios from "axios";

import { toast } from "react-toastify";

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [dToken, setDToken] = useState(
        localStorage.getItem("dToken") ? localStorage.getItem("dToken") : ""
    );

    const [appointments, setAppointments] = useState([]);
    const [doctorProfile, setDoctorProfile] = useState(null);
    const [profileLoading, setProfileLoading] = useState(false);

    const getAppointments = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + "api/doctor/appointments",
                { headers: { dToken } }
            );
            if (data.success) {
                setAppointments(data.appointments);
                console.log(data.appointments);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const completeAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + "api/doctor/complete-appointment",
                { appointmentId },
                { headers: { dToken } }
            );
            if (data.success) {
                toast.success(data.message);
                getAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(
                backendUrl + "api/doctor/cancel-appointment",
                { appointmentId },
                { headers: { dToken } }
            );
            if (data.success) {
                toast.success(data.message);
                getAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const getDoctorProfile = async () => {
        try {
            setProfileLoading(true);
            const { data } = await axios.get(
                backendUrl + "api/doctor/profile",
                { headers: { dToken } }
            );
            if (data.success) {
                setDoctorProfile(data.doctor);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setProfileLoading(false);
        }
    };

    const updateDoctorProfile = async (updateData) => {
        try {
            setProfileLoading(true);
            const { data } = await axios.post(
                backendUrl + "api/doctor/update-profile",
                updateData,
                { headers: { dToken } }
            );
            if (data.success) {
                setDoctorProfile(data.doctor);
                toast.success(data.message);
                return true;
            } else {
                toast.error(data.message);
                return false;
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
            return false;
        } finally {
            setProfileLoading(false);
        }
    };

    const value = {
        dToken,
        setDToken,
        backendUrl,
        appointments,
        setAppointments,
        getAppointments,
        cancelAppointment,
        completeAppointment,
        updateDoctorProfile,
        getDoctorProfile,
        doctorProfile,
        setDoctorProfile,
        profileLoading,
    };
    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

export default DoctorContextProvider;
