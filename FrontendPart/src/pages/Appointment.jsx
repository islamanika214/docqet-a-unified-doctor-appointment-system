import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import SimilarDoctors from "../components/SimilarDoctors";
import { DoctorAppContext } from "../context/DoctorAppContexts";

const Appointment = () => {
    const { docId } = useParams();
    const { doctorsList, currencySymbol, backendUrl, token, getdoctorsData } =
        useContext(DoctorAppContext);

    const navigate = useNavigate();

    const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    const [doctorInfo, setDoctorInfo] = useState(null);
    const [availableDocSlots, setAvailableDocSlots] = useState([]);
    const [selectedSlotIndex, setSelectedSlotIndex] = useState(0);
    const [selectedSlotTime, setSelectedSlotTime] = useState("");

    const fetchDoctorInfo = async () => {
        const doctorInfo = doctorsList.find((doctor) => doctor._id === docId);
        setDoctorInfo(doctorInfo);
    };

    const getAvailableSlots = async () => {
        setAvailableDocSlots([]);

        let today = new Date();

        for (let i = 0; i < 7; i++) {
            let currentDate = new Date(today);

            currentDate.setDate(today.getDate() + i);

            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21, 0, 0, 0);

            if (today.getDate() === currentDate.getDate()) {
                currentDate.setHours(
                    currentDate.getHours() > 10
                        ? currentDate.getHours() + 1
                        : 10
                );
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            } else {
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while (currentDate < endTime) {
                let timeFormat = currentDate.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                });

                ////

                // let day = currentDate.getDate();
                // let month = currentDate.getMonth() + 1;
                // let year = currentDate.getFullYear();

                // const slotDate = day + "_" + month + "_" + year;
                // const slotTime = timeFormat;

                // const isSlotAvailable =
                //     doctorInfo.slots_booked[slotDate] &&
                //     doctorInfo.slots_booked[slotDate].includes(slotTime)
                //         ? false
                //         : true;

                // if (isSlotAvailable) {
                //     timeSlots.push({
                //         datetime: new Date(currentDate),
                //         time: timeFormat,
                //     });
                // }

                ////

                timeSlots.push({
                    datetime: new Date(currentDate),
                    time: timeFormat,
                });

                // Increment current time of time slot by 15 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 15);
            }

            setAvailableDocSlots((prev) => [...prev, timeSlots]);
        }
    };

    const bookAppointment = async () => {
        if (!token) {
            toast.warn("Login to book appointment");
            return navigate("/login");
        }

        try {
            const date = availableDocSlots[selectedSlotIndex][0].datetime;

            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();

            const slotDate = day + "_" + month + "_" + year;

            const { data } = await axios.post(
                backendUrl + "/api/user/book-appointment",
                { docId, slotDate, selectedSlotTime },
                { headers: { token } }
            );
            if (data.success) {
                toast.success(data.message);
                getdoctorsData();
                navigate("/my-appointments");
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchDoctorInfo();
    }, [doctorsList, docId]);

    useEffect(() => {
        getAvailableSlots();
    }, [doctorInfo]);

    useEffect(() => {
        console.log(availableDocSlots);
    }, [availableDocSlots]);

    return (
        doctorInfo && (
            <div className="px-2 sm:px-4 lg:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="relative lg:col-span-7">
                        <div className="">
                            <img
                                className="bg-sageGlow w-full sm:max-w-150 h-100 rounded-lg"
                                src={doctorInfo.photo}
                                alt=""
                            />
                        </div>

                        <div
                            className="absolute left-4 right-4 -bottom-8 
    sm:left-6 sm:right-auto sm:w-[78%]
    md:w-[70%]
    lg:w-[68%]
    bg-mossyFog/95 text-white
    border border-oliveWhisper
    rounded-xl shadow-xl
    backdrop-blur
    p-5 sm:p-6
    transition-transform duration-300 hover:scale-105"
                        >
                            {/* Name */}
                            <p className="flex items-center gap-2 text-xl sm:text-2xl font-semibold">
                                {doctorInfo.fullName}
                                <img
                                    className="w-5"
                                    src={assets.verified_icon}
                                    alt=""
                                />
                            </p>

                            {/* Qualification / Specialty / YOS */}
                            <div className="flex flex-wrap items-center gap-2 text-sm mt-1 text-oliveWhisper">
                                <p>
                                    {doctorInfo.qualification} —{" "}
                                    {doctorInfo.speciality}
                                </p>
                                <span className="py-0.5 px-2 border border-mintMist text-xs rounded-full">
                                    {doctorInfo.yearsOfService}
                                </span>
                            </div>

                            {/* About */}
                            <div className="mt-3">
                                <p className="flex items-center gap-1 text-sm font-medium text-mintMist">
                                    About <img src={assets.info_icon} alt="" />
                                </p>
                                <p className="text-sm text-slate-100 mt-1 line-clamp-4">
                                    {doctorInfo.bio}
                                </p>
                            </div>

                            {/* Fee */}
                            <p className="text-slate-200 font-medium mt-4">
                                Appointment fee:{" "}
                                <span className="text-slate-50">
                                    {currencySymbol}
                                    {doctorInfo.consultationFee}
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Schedule / Slots */}
                    <div className="lg:col-span-5">
                        <div
                            className="
              bg-white border border-oliveWhisper/50 rounded-2xl shadow-lg
              p-5 sm:p-6 lg:p-7
              lg:sticky lg:top-6
              min-h-[420px]
            "
                        >
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                                    Pick Your Slot
                                </h2>
                                <span className="text-xs px-2 py-1 rounded-full border text-gray-500">
                                    Next 7 days
                                </span>
                            </div>

                            {/* Days row */}
                            <div className="flex gap-3 items-center w-full overflow-x-auto mt-4 pb-2 no-scrollbar">
                                {availableDocSlots.length &&
                                    availableDocSlots.map((item, index) => (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedSlotIndex(index)
                                            }
                                            className={`
                      text-center py-3 min-w-16 rounded-2xl transition-all
                      ${
                          selectedSlotIndex === index
                              ? "bg-sageGlow text-black shadow-sm"
                              : "border border-gray-200 text-gray-700 hover:border-sageGlow/70"
                      }
                    `}
                                            key={index}
                                        >
                                            <p className="text-xs">
                                                {item[0] &&
                                                    weekDays[
                                                        item[0].datetime.getDay()
                                                    ]}
                                            </p>
                                            <p className="text-base font-semibold">
                                                {item[0] &&
                                                    item[0].datetime.getDate()}
                                            </p>
                                        </button>
                                    ))}
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100 my-5" />

                            {/* Time slots */}
                            <p className="text-sm text-gray-700 mb-2">
                                Available times
                            </p>
                            <div className="flex flex-wrap gap-2 max-h-[180px] overflow-y-auto pr-1">
                                {availableDocSlots.length &&
                                    availableDocSlots[selectedSlotIndex].map(
                                        (item, index) => (
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setSelectedSlotTime(
                                                        item.time
                                                    )
                                                }
                                                className={`
                      text-sm px-4 py-2 rounded-full transition-all
                      ${
                          item.time === selectedSlotTime
                              ? "bg-sageGlow text-white shadow"
                              : "text-gray-700 border border-gray-300 hover:border-sageGlow/70"
                      }
                    `}
                                                key={index}
                                            >
                                                {item.time.toLowerCase()}
                                            </button>
                                        )
                                    )}
                            </div>

                            {/* CTA */}
                            <button
                                onClick={bookAppointment}
                                className="
                w-full mt-6
                bg-sageGlow text-white text-sm font-medium
                px-6 py-3 rounded-full
                hover:opacity-95 active:opacity-90
              "
                            >
                                Book an Appointment Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Spacer below floating card on small/medium screens */}
                <div className="h-20 sm:h-24 lg:hidden" />

                {/* Similar Doctors */}
                <div className="mt-6 lg:mt-10">
                    <SimilarDoctors
                        docId={docId}
                        speciality={doctorInfo.speciality}
                    />
                </div>
            </div>
        )
    );
};

export default Appointment;
