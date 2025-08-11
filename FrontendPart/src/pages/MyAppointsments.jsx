import { useContext } from "react";
import { DoctorAppContext } from "../context/DoctorAppContexts";

const MyAppointsments = () => {
    const { doctorsList } = useContext(DoctorAppContext);
    return (
        <div>
            <p className="pb-3 mt-12 text-lg font-semibold text-darkMossyFog border-b border-x-deepForest">
                My Appointments History
            </p>
            <div>
                {doctorsList.slice(0, 3).map((item, index) => (
                    <div
                        className="grid grid-clos-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
                        key={index}
                    >
                        <div>
                            <img
                                className="w-32 bg-slate-200"
                                src={item.photo}
                                alt=""
                            />
                        </div>
                        <div className="flex-1 text-sm text-darkSageGlow/80">
                            <p className="font-semibold text-darkMossyFog">
                                {item.fullName}
                            </p>
                            <p>{item.speciality}</p>
                            <p className="text-darkSageGlow font-medium mt-1">
                                Address:
                            </p>
                            <p className="text-xs">{item.location.street}</p>
                            <p className="text-xs">{item.location.area}</p>
                            <p className="text-xs mt-1">
                                <span className="text-darkSageGlow font-sm mt-1 font-medium">
                                    Date & Time:
                                </span>{" "}
                                9 August, 2025 | 7:30 PM
                            </p>
                        </div>

                        <div></div>

                        <div className="flex flex-col gap-2 justify-end">
                            <button className="border border-oliveWhisper sm:min-w-48 text-center py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light transition-all duration-300">
                                Pay Online
                            </button>

                            <button className="border border-oliveWhisper sm:min-w-48 text-center py-2 text-sm hover:bg-red-600 hover:text-white font-light transition-all duration-300">
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
