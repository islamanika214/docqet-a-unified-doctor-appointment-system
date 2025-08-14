import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";

const AddDoctor = () => {
    const [docImg, setDocImg] = useState(false);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [yearsOfService, setYearsOfService] = useState("1 year");
    const [fees, setFees] = useState("");
    const [bio, setBio] = useState("");
    const [speciality, setSpeciality] = useState("General Physician");
    const [qualification, setQualification] = useState("");
    const [street, setStreet] = useState("");
    const [area, setArea] = useState("");

    const { backendUrl, aToken } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (!docImg) {
                return toast.error("Image Not Selected");
            }

            const formData = new FormData();
            formData.append("photo", docImg);
            formData.append("fullName", fullName);
            formData.append("email", email);
            formData.append("password", password);
            formData.append("yearsOfService", yearsOfService);
            formData.append("consultationFee", Number(fees));
            formData.append("bio", bio);
            formData.append("speciality", speciality);
            formData.append("qualification", qualification);
            formData.append(
                "location",
                JSON.stringify({ line1: street, line2: area })
            );

            formData.forEach((value, key) => {
                console.log(`${key} : ${value}`);
            });

            // const { data } = await axios.post(
            //     backendUrl + "api/admin/add-doctor",
            //     formData,
            //     {
            //         headers: {
            //             Authorization: aToken,
            //             "Content-Type": "multipart/form-data",
            //         },
            //     }
            // );

            const { data } = await axios.post(
                `${backendUrl}api/admin/add-doctor`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${aToken}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (data.success) {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Error adding doctor:", error);
            toast.error(
                error.response?.data?.message || "Failed to add doctor"
            );
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
            <p className="mb-3 text-lg font-medium text-mossyFog">Add Doctor</p>
            <div className="bg-mintMist px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div className="flex items-center gap-4 mb-8 text-mossyFog">
                    <label htmlFor="doc-img">
                        <img
                            className="w-16 bg-slate-50 rounded-full cursor-pointer"
                            src={
                                docImg
                                    ? URL.createObjectURL(docImg)
                                    : assets.upload_area
                            }
                            alt=""
                        />
                    </label>
                    <input
                        type="file"
                        id="doc-img"
                        hidden
                        onChange={(e) => setDocImg(e.target.files[0])}
                    />
                    <p>
                        Upload doctor <br /> picture
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-10 text-mossyFog">
                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Name</p>
                            <input
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="text"
                                placeholder="Enter Doctor Name"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Email</p>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="email"
                                placeholder="Enter Doctor Email"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Password</p>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="password"
                                placeholder="Enter Doctor Password"
                                required
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Experience</p>
                            <select
                                value={yearsOfService}
                                onChange={(e) =>
                                    setYearsOfService(e.target.value)
                                }
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                            >
                                <option value="">Select Experience</option>
                                <option value="1 year">1 year</option>
                                <option value="2 year">2 year</option>
                                <option value="3 year">3 year</option>
                                <option value="4 year">4 year</option>
                                <option value="5 year">5 year</option>
                                <option value="6 year">6 year</option>
                                <option value="7 year">7 year</option>
                                <option value="8 year">8 year</option>
                                <option value="9 year">9 year</option>
                                <option value="10 year">10 year</option>
                            </select>
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Appointment fees</p>
                            <input
                                value={fees}
                                onChange={(e) => setFees(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="number"
                                placeholder="Enter Doctor Appointment fees"
                                required
                            />
                        </div>
                    </div>

                    <div className="w-full lg:flex-1 flex flex-col gap-4">
                        <div className="flex-1 flex flex-col gap-1">
                            <p>Speciality</p>
                            <select
                                value={speciality}
                                onChange={(e) => setSpeciality(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                            >
                                <option value="">Select Speciality</option>
                                <option value="General Physician">
                                    General Physician
                                </option>
                                <option value="Gynecologist">
                                    Gynecologist
                                </option>
                                <option value="Dermatologist">
                                    Dermatologist
                                </option>
                                <option value="Pediatrician">
                                    Pediatrician
                                </option>
                                <option value="Neurologist">Neurologist</option>
                                <option value="Cardiologist">
                                    Cardiologist
                                </option>
                            </select>
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Doctor Qualification</p>
                            <input
                                value={qualification}
                                onChange={(e) =>
                                    setQualification(e.target.value)
                                }
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="text"
                                placeholder="Enter Doctor Qualification"
                                required
                            />
                        </div>

                        <div className="flex-1 flex flex-col gap-1">
                            <p>Location</p>
                            <input
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="text"
                                placeholder="Street"
                                required
                            />
                            <input
                                value={area}
                                onChange={(e) => setArea(e.target.value)}
                                className="border border-mossyFog rounded px-3 py-2 bg-mintMist"
                                type="text"
                                placeholder="Area"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-4 mb-2 text-mossyFog">
                    <p>About Doctor</p>
                    <textarea
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full px-4 pt-2 border border-mossyFog rounded bg-mintMist"
                        type="text"
                        placeholder="Write About Doctor"
                        rows={5}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-darkMossyFog text-mintMist px-10 py-3 rounded-full hover:cursor-pointer"
                >
                    Add Doctor
                </button>
            </div>
        </form>
    );
};

export default AddDoctor;
