import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
    const { doctors, aToken, getAllDoctors } = useContext(AdminContext);

    useEffect(() => {
        if (aToken) {
            getAllDoctors();
        }
    }, [aToken]);
    return (
        <div className="m-5 max-h-[90vh] overflow-y-scroll">
            <h1 className="text-lg font-medium text-sageGlow">All Doctors</h1>
            <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
                {doctors.map((item, index) => (
                    <div
                        className="min-w-[200px] mx-2 border border-yellow-100 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-slate-200"
                        key={index}
                    >
                        <img
                            className="bg-mintMist w-full h-52 object-cover object-top rounded-md transition-all duration-500"
                            src={item.photo}
                            alt=""
                        />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-darkMossyFog">
                                <p className="text-mossyFog text-lg font-medium">
                                    {item.fullName}
                                </p>
                                <p className="text-mossyFog text-lg font-medium">
                                    {item.speciality}
                                </p>
                                <div>
                                    <input
                                        type="checkbox"
                                        checked={item.available}
                                    />
                                    <p>Available</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoctorsList;
