import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState({
        name: "Anika Islam",
        photo: assets.profile_pic,
        email: "wewew@gmail.com",
        phone: "+111111111",
        address: {
            street: "45/1, Lakeview Road",
            area: "Dhanmondi, Dhaka",
        },
        gender: "female",
        dob: "2002-01-05",
    });

    const [isEdit, setIsEdit] = useState(false);

    return (
        <div className="max-w-lg flex flex-col gap-2 text-sm">
            <img className="w-52 rounded" src={userInfo.photo} alt="" />

            {isEdit ? (
                <input
                    className="bg-oliveWhisper/40 text-deepForest text-3xl font-medium max-w-52 mt-4"
                    type="text"
                    value={userInfo.name}
                    onChange={(e) =>
                        setUserInfo((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
            ) : (
                <p className="font-medium text-3xl text-darkMossyFog mt-4">
                    {userInfo.name}
                </p>
            )}

            <hr className="bg-oliveWhisper h-[1px] border-none" />
            <div>
                <p className="text-darkSageGlow underline mt-3">
                    CONTACT INFORMATION
                </p>
                <div className="grid grid-cols-[1fr_3fr] gap-y-2 mt-3 text-darkMossyFog">
                    <p className="font-medium">Email id:</p>
                    <p className="text-sky-800">{userInfo.email}</p>
                    <p className="font-medium">Phone:</p>
                    {isEdit ? (
                        <input
                            className="bg-oliveWhisper/20 text-deepForest max-w-48"
                            type="text"
                            value={userInfo.phone}
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    phone: e.target.value,
                                }))
                            }
                        />
                    ) : (
                        <p className="text-sky-800">{userInfo.phone}</p>
                    )}
                    <p className="font-medium">Address: </p>
                    {isEdit ? (
                        <p>
                            <input
                                className="bg-oliveWhisper/20 text-deepForest max-w-48"
                                onChange={(e) =>
                                    setUserInfo((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            street: e.target.value,
                                        },
                                    }))
                                }
                                value={userInfo.address.street}
                                type="text"
                            />
                            <br />
                            <input
                                className="bg-oliveWhisper/20 text-deepForest max-w-48"
                                onChange={(e) =>
                                    setUserInfo((prev) => ({
                                        ...prev,
                                        address: {
                                            ...prev.address,
                                            area: e.target.value,
                                        },
                                    }))
                                }
                                value={userInfo.address.area}
                                type="text"
                            />
                        </p>
                    ) : (
                        <p>
                            {userInfo.address.street}
                            <br />
                            {userInfo.address.area}
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
                                setUserInfo((prev) => ({
                                    ...prev,
                                    gender: e.target.value,
                                }))
                            }
                            value={userInfo.gender}
                        >
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                        </select>
                    ) : (
                        <p>{userInfo.gender}</p>
                    )}
                    <p className="font-medium">Birth Date:</p>

                    {isEdit ? (
                        <input
                            className="bg-oliveWhisper/20 text-deepForest max-w-28"
                            type="date"
                            onChange={(e) =>
                                setUserInfo((prev) => ({
                                    ...prev,
                                    dob: e.target.value,
                                }))
                            }
                            value={userInfo.dob}
                        />
                    ) : (
                        <p>{userInfo.dob}</p>
                    )}
                </div>
            </div>

            <div className="mt-10">
                {isEdit ? (
                    <button
                        className="border border-oliveWhisper px-6 py-2 text-sm hover:bg-darkMossyFog hover:text-white font-light hover:text-lg transition-all duration-300 rounded-full"
                        onClick={() => setIsEdit(false)}
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
    );
};

export default MyProfile;
