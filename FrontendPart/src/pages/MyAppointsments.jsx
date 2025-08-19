import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { DoctorAppContext } from "../context/DoctorAppContexts";

const MyAppointsments = () => {
    const { backendUrl, token } = useContext(DoctorAppContext);

    const [appointments, setAppointments] = useState([]);
    const months = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split("_");
        return (
            dateArray[0] +
            " " +
            months[Number(dateArray[1])] +
            ", " +
            dateArray[2]
        );
    };

    const getUserAppointments = async () => {
        try {
            const { data } = await axios.get(
                backendUrl + "/api/user/appointments",
                { headers: { token } }
            );
            if (data.success) {
                setAppointments(data.appointments.reverse());
                console.log(data.appointments);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    const cancelAppointment = async (appointmentId) => {
        try {
            console.log(appointmentId);
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token) {
            getUserAppointments();
        }
    }, [token]);
    return (
        <div>
            <p className="pb-3 mt-12 text-lg font-semibold text-darkMossyFog border-b border-x-deepForest">
                My Appointments History
            </p>
            <div>
                {appointments.map((item, index) => (
                    <div
                        className="grid grid-clos-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
                        key={index}
                    >
                        <div>
                            <img
                                className="w-32 bg-slate-200"
                                src={item.doctorInfo.photo}
                                alt=""
                            />
                        </div>
                        <div className="flex-1 text-sm text-darkSageGlow/80">
                            <p className="font-semibold text-darkMossyFog">
                                {item.doctorInfo.fullName}
                            </p>
                            <p>{item.doctorInfo.speciality}</p>
                            <p className="text-darkSageGlow font-medium mt-1">
                                Location
                            </p>
                            <p className="text-xs">
                                {item.doctorInfo.location.line1}
                            </p>
                            <p className="text-xs">
                                {item.doctorInfo.location.line2}
                            </p>
                            <p className="text-xs mt-1">
                                <span className="text-darkSageGlow font-sm mt-1 font-medium">
                                    Date & Time:
                                </span>
                                {slotDateFormat(item.slotDate)} |{" "}
                                {item.selectedSlotTime}
                            </p>
                        </div>

                        <div></div>

                        <div className="flex flex-col gap-2 justify-end">
                            <button className="border border-oliveWhisper sm:min-w-48 text-center py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light transition-all duration-300">
                                Pay Online
                            </button>

                            <button
                                onClick={() => cancelAppointment(item._id)}
                                className="border border-oliveWhisper sm:min-w-48 text-center py-2 text-sm hover:bg-red-600 hover:text-white font-light transition-all duration-300"
                            >
                                Cancel Appointment
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointsments;
