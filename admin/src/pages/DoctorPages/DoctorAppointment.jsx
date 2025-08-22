import { useContext, useEffect } from "react";
import { assets } from "../../assets/assets";
import { DoctorAppContext } from "../../context/DoctorAppContext";
import { DoctorContext } from "../../context/DoctorContext";
const DoctorAppointment = () => {
    const {
        dToken,
        appointments,
        getAppointments,
        cancelAppointment,
        completeAppointment,
    } = useContext(DoctorContext);

    const { calculateAge, slotDateFormate } = useContext(DoctorAppContext);

    useEffect(() => {
        if (dToken) {
            getAppointments();
        }
    }, [dToken]);

    useEffect(() => {
        console.log("=== APPOINTMENTS DEBUG ===");
        console.log("Total appointments:", appointments.length);
        appointments.forEach((apt, idx) => {
            console.log(`Appointment ${idx + 1}:`, {
                id: apt._id?.slice(-4) || "no-id",
                patient: apt.userData?.fullName || "no-name",
                cancelled: apt.cancelled,
                isCompleted: apt.isCompleted,
                date: apt.slotDate,
            });
        });
    }, [appointments]);

    return (
        <div className="w-full  m-5">
            <p className="mb-3 text-lg font-medium">My All Appointments</p>
            <div className="bg-oliveWhisper border rounded text-sm max-h-[80vh] min-h-[50vh] overflow-y-scroll">
                <div className="max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-1 py-3 px-6 border-b">
                    <p>#</p>
                    <p>Patient</p>
                    <p>Payment</p>
                    <p>Age</p>
                    <p>Date & Time</p>
                    <p>Fees</p>
                    <p>Action</p>
                </div>
                {[...appointments].reverse().map((item, index) => (
                    <div
                        key={item._id}
                        className="flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_2fr_1fr_1fr] gap-1 items-center text-darkMossyFog py-3 px-6 border-b hover:bg-sageGlow"
                    >
                        <p className="max-sm:hidden">
                            {appointments.length - index}
                        </p>
                        <div className="flex items-center gap-2">
                            <img
                                src={item.userData.photo}
                                alt=""
                                className="w-12 h-12 rounded-full"
                            />
                            <p>{item.userData.fullName}</p>
                        </div>
                        <div>
                            <p className="text-xs inline border border-mossyFog px-2 rounded-full">
                                {item.payment ? "Online" : "CASH"}
                            </p>
                        </div>
                        <p className="max-sm:hidden">
                            {calculateAge(item.userData.dob)}
                        </p>
                        <p>
                            {slotDateFormate(item.slotDate)},{" "}
                            {item.selectedSlotTime}
                        </p>
                        <p>$ {item.consultationFee}</p>

                        {item.cancelled ? (
                            <p className="text-red-600">Cancelled</p>
                        ) : item.isCompleted ? (
                            <p className="text-green-600">Completed</p>
                        ) : (
                            <div className="flex">
                                <img
                                    onClick={() => cancelAppointment(item._id)}
                                    className="w-10 cursor-pointer"
                                    src={assets.cancel_icon}
                                    alt=""
                                />
                                <img
                                    onClick={() =>
                                        completeAppointment(item._id)
                                    }
                                    className="w-10 cursor-pointer"
                                    src={assets.tick_icon}
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorAppointment;
