import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { DoctorAppContext } from "../context/DoctorAppContexts";
const MyProfile = () => {
    // fullName: { type: String, required: true },
    //         email: { type: String, required: true, unique: true },
    //         password: { type: String, required: true },
    //         photo: {
    //             type: String,
    //             default:
    //                 "data:
    //         },
    //         location: { type: Object, default: { street: "", area: "" } },
    //         gender: { type: String, default: "Not Selected" },
    //         dob: { type: String, default: "Not Selected" },
    //         phone: { type: String, default: "1111111" },

    const { userData, setUserData, token, backendUrl, loadUserProfileData } =
        useContext(DoctorAppContext);

    const [isEdit, setIsEdit] = useState(false);
    const [photo, setPhoto] = useState(null);

    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();

            formData.append("fullName", userData.fullName);
            formData.append("phone", userData.phone);
            formData.append("location", JSON.stringify(userData.location));

            formData.append("gender", userData.gender);
            formData.append(
                "dob",
                userData.dob === "Not Selected" ? "" : userData.dob || ""
            );

            if (photo) {
                formData.append("photo", photo);
            }

            const { data } = await axios.post(
                backendUrl + "/api/user/update-profile",
                formData,
                { headers: { token } }
            );
            //added
            console.log("Sending with token:", token);

            if (data.success) {
                toast.success(data.message);
                await loadUserProfileData();
                setIsEdit(false);
                setPhoto(null);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    return (
        userData && (
            <div className="max-w-lg flex flex-col gap-2 text-sm">
                {isEdit ? (
                    <label htmlFor="photo">
                        <div className="inline-block relative cursor-pointer">
                            <img
                                className="w-36 rounded opacity-75"
                                src={
                                    photo
                                        ? URL.createObjectURL(photo)
                                        : userData.photo || null
                                }
                                alt=""
                            />
                            <img
                                className="w-10 absolute bottom-12 right-12"
                                src={photo ? "" : assets.upload_icon}
                                alt=""
                                style={photo ? { display: "none" } : {}}
                            />
                        </div>
                        <input
                            onChange={(e) => setPhoto(e.target.files[0])}
                            type="file"
                            id="photo"
                            hidden
                        />
                    </label>
                ) : (
                    <img
                        className="w-52 rounded"
                        src={userData.photo || assets.default_profile_image}
                        alt=""
                    />
                )}

                {isEdit ? (
                    <input
                        className="bg-oliveWhisper/40 text-deepForest text-3xl font-medium max-w-52 mt-4"
                        type="text"
                        value={userData.fullName || ""}
                        onChange={(e) =>
                            setUserData((prev) => ({
                                ...prev,
                                fullName: e.target.value,
                            }))
                        }
                    />
                ) : (
                    <p className="font-medium text-3xl text-darkMossyFog mt-4">
                        {userData.fullName || userData.fullname}
                    </p>
                )}

                <hr className="bg-oliveWhisper h-[1px] border-none" />
                <div>
                    <p className="text-darkSageGlow underline mt-3">
                        CONTACT INFORMATION
                    </p>
                    <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-darkMossyFog">
                        <p className="font-medium">Email id:</p>
                        <p className="text-sky-800">{userData.email}</p>
                        <p className="font-medium">Phone:</p>
                        {isEdit ? (
                            <input
                                className="bg-oliveWhisper/20 text-deepForest max-w-48"
                                type="text"
                                value={userData.phone || ""}
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        phone: e.target.value,
                                    }))
                                }
                            />
                        ) : (
                            <p className="text-sky-800">{userData.phone}</p>
                        )}
                        <p className="font-medium">Location: </p>
                        {isEdit ? (
                            <p>
                                <input
                                    className="bg-oliveWhisper/20 text-deepForest max-w-48"
                                    onChange={(e) =>
                                        setUserData((prev) => ({
                                            ...prev,
                                            location: {
                                                ...prev.location,
                                                street: e.target.value,
                                            },
                                        }))
                                    }
                                    value={userData.location?.street || ""}
                                    type="text"
                                />
                                <br />
                                <input
                                    className="bg-oliveWhisper/20 text-deepForest max-w-48"
                                    onChange={(e) =>
                                        setUserData((prev) => ({
                                            ...prev,
                                            location: {
                                                ...prev.location,
                                                area: e.target.value,
                                            },
                                        }))
                                    }
                                    value={userData.location.area || ""}
                                    type="text"
                                />
                            </p>
                        ) : (
                            <p>
                                {userData.location.street}
                                <br />
                                {userData.location.area}
                            </p>
                        )}
                    </div>
                </div>
                <div>
                    <p className="text-darkSageGlow underline mt-3">
                        ESSENTIAL INFORMATION
                    </p>
                    <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-darkMossyFog">
                        <p className="font-medium">Gender:</p>
                        {isEdit ? (
                            <select
                                className="max-w-20 bg-oliveWhisper/20"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        gender: e.target.value,
                                    }))
                                }
                                value={userData.gender || "Not Selected"}
                            >
                                <option value="Not Selected">
                                    Not Selected
                                </option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                            </select>
                        ) : (
                            <p>{userData.gender}</p>
                        )}
                        <p className="font-medium">Birth Date:</p>

                        {isEdit ? (
                            <input
                                className="bg-oliveWhisper/20 text-deepForest max-w-28"
                                type="date"
                                onChange={(e) =>
                                    setUserData((prev) => ({
                                        ...prev,
                                        dob: e.target.value,
                                    }))
                                }
                                value={
                                    userData.dob &&
                                    userData.dob !== "Not Selected"
                                        ? userData.dob
                                        : ""
                                }
                            />
                        ) : (
                            <p>{userData.dob}</p>
                        )}
                    </div>
                </div>

                <div className="mt-10">
                    {isEdit ? (
                        <button
                            className="border border-oliveWhisper px-6 py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light hover:text-lg transition-all duration-300 rounded-full"
                            onClick={updateUserProfileData}
                        >
                            Save Changes
                        </button>
                    ) : (
                        <button
                            className="border border-oliveWhisper px-6 py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light hover:text-lg transition-all duration-300 rounded-full"
                            onClick={() => setIsEdit(true)}
                        >
                            Edit Information
                        </button>
                    )}
                </div>
            </div>
        )
    );
};

export default MyProfile;
