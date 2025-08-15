import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
    const { doctors, aToken, getAllDoctors, changeAvailability } =
        useContext(AdminContext);

    useEffect(() => {
        if (aToken) {
            getAllDoctors();
        }
    }, [aToken]);
    return (
        <div className="m-5 max-h-[90vh] overflow-y-scroll">
            <h1 className="text-lg font-medium text-sageGlow">All Doctors</h1>
            <div className="w-full grid grid-cols-5 grid-rows-3 pt-5 gap-4 gap-y-6">
                {doctors.map((item, index) => (
                    <div
                        className="min-w-[200px] mx-2 border border-sageGlow rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-slate-200 group"
                        key={index}
                    >
                        <img
                            className="bg-white group-hover:bg-mossyFog w-full h-52 object-cover object-top rounded-md transition-all duration-500"
                            src={item.photo}
                            alt=""
                        />
                        <div className="p-4">
                            <p className="text-mossyFog text-lg font-medium">
                                {item.fullName}
                            </p>
                            <p className="text-mossyFog text-sm font-light">
                                {item.speciality}
                            </p>
                            <div className="mt-2 flex items-center gap-1 text-sm">
                                <input
                                    onChange={() =>
                                        changeAvailability(item._id)
                                    }
                                    type="checkbox"
                                    checked={item.available}
                                />
                                <p>Available</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
