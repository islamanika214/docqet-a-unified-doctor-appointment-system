import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DoctorAppContext } from "../context/DoctorAppContexts";

{
    /* softCreamy	sandyBeige	leafyGreen	deepForestGreen*/
}
const Doctors = () => {
    const { speciality } = useParams();

    const [displayFilter, setDisplayFilter] = useState(false);

    const [filterDoctor, setFilterDoctor] = useState([]);

    const navigate = useNavigate();

    const { doctorsList } = useContext(DoctorAppContext);

    const applyDocFilter = () => {
        if (speciality) {
            setFilterDoctor(
                doctorsList.filter((doctor) => doctor.speciality === speciality)
            );
        } else {
            setFilterDoctor(doctorsList);
        }
    };

    useEffect(() => {
        applyDocFilter();
    }, [doctorsList, speciality]);
    // className="border border-oliveWhisper px-6 py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light hover:text-lg transition-all duration-300 rounded-full"
    return (
        <div>
            <p className="text-green-950">
                Browse through the doctors specialist.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
                <button
                    className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
                        displayFilter ? "bg-darkMossyFog text-white" : ""
                    }`}
                    onClick={() => setDisplayFilter((prev) => !prev)}
                >
                    Filter
                </button>
                <div
                    className={`flex flex-col gap-4 text-sm  text-green-900 ${
                        displayFilter ? "flex" : "hidden sm:flex"
                    }`}
                >
                    <p
                        onClick={() =>
                            speciality === "General Physician"
                                ? navigate("/doctors")
                                : navigate("/doctors/General Physician")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border border-slate-300 hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "General Physician"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        General Physician
                    </p>
                    <p
                        onClick={() =>
                            speciality === "Gynecologist"
                                ? navigate("/doctors")
                                : navigate("/doctors/Gynecologist")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "Gynecologist"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        Gynecologist
                    </p>
                    <p
                        onClick={() =>
                            speciality === "Dermatologist"
                                ? navigate("/doctors")
                                : navigate("/doctors/Dermatologist")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "Dermatologist"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        Dermatologist
                    </p>
                    <p
                        onClick={() =>
                            speciality === "Pediatrician"
                                ? navigate("/doctors")
                                : navigate("/doctors/Pediatrician")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300  hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "Pediatrician"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        Pediatrician
                    </p>
                    <p
                        onClick={() =>
                            speciality === "Neurologist"
                                ? navigate("/doctors")
                                : navigate("/doctors/Neurologist")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "Neurologist"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        Neurologist
                    </p>
                    <p
                        onClick={() =>
                            speciality === "Cardiologist"
                                ? navigate("/doctors")
                                : navigate("/doctors/Cardiologist")
                        }
                        className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-300 hover:bg-slate-50 hover:text-black rounded transition-all cursor-pointer ${
                            speciality === "Cardiologist"
                                ? "bg-sky-50 text-black"
                                : ""
                        }`}
                    >
                        Cardiologist
                    </p>
                </div>

                <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
                    {filterDoctor.map((item, index) => (
                        <div
                            onClick={() => navigate(`/appointment/${item._id}`)}
                            key={index}
                            className="min-w-[200px] mx-2 border border-yellow-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-slate-200"
                        >
                            <img
                                src={item.photo}
                                alt=""
                                className="w-full h-52 object-cover object-top rounded-md"
                            />
                            <div className="p-4">
                                <div className="flex items-center gap-2 text-sm text-center text-green-600 ">
                                    <p className="w-2 h-2 bg-green-700 rounded-full"></p>
                                    <p>Available</p>
                                </div>
                                <p className="text-yellow-700 text-lg font-medium">
                                    {item.fullName}
                                </p>
                                <p className="text-yellow-600 text-sm">
                                    {item.speciality}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Doctors;
