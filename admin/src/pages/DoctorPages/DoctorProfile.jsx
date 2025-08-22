import { useContext, useEffect, useState } from "react";
import { DoctorContext } from "../../context/DoctorContext";

const DoctorProfile = () => {
    const {
        dToken,
        doctorProfile,
        getDoctorProfile,
        updateDoctorProfile,
        profileLoading,
    } = useContext(DoctorContext);

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        speciality: "",
        qualification: "",
        yearsOfService: "",
        bio: "",
        consultationFee: "",
        location: "",
        available: true,
    });

    useEffect(() => {
        if (dToken) {
            getDoctorProfile();
        }
    }, [dToken]);

    useEffect(() => {
        if (doctorProfile) {
            setFormData({
                fullName: doctorProfile.fullName || "",
                email: doctorProfile.email || "",
                speciality: doctorProfile.speciality || "",
                qualification: doctorProfile.qualification || "",
                yearsOfService: doctorProfile.yearsOfService || "",
                bio: doctorProfile.bio || "",
                consultationFee: doctorProfile.consultationFee || "",
                location: doctorProfile.location?.line1
                    ? `${doctorProfile.location.line1}, ${doctorProfile.location.line2}`
                    : "",
                available:
                    doctorProfile.available !== undefined
                        ? doctorProfile.available
                        : true,
            });
        }
    }, [doctorProfile]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateData = { ...formData };

        if (formData.location) {
            const locationParts = formData.location.split(",");
            updateData.location = {
                line1: locationParts[0]?.trim() || "",
                line2: locationParts[1]?.trim() || "",
            };
        }

        const success = await updateDoctorProfile(updateData);
        if (success) {
            setIsEditing(false);
        }
    };

    const handleCancel = () => {
        if (doctorProfile) {
            setFormData({
                fullName: doctorProfile.fullName || "",
                email: doctorProfile.email || "",
                speciality: doctorProfile.speciality || "",
                qualification: doctorProfile.qualification || "",
                yearsOfService: doctorProfile.yearsOfService || "",
                bio: doctorProfile.bio || "",
                consultationFee: doctorProfile.consultationFee || "",
                location: doctorProfile.location?.line1
                    ? `${doctorProfile.location.line1}, ${doctorProfile.location.line2}`
                    : "",
                available:
                    doctorProfile.available !== undefined
                        ? doctorProfile.available
                        : true,
            });
        }
        setIsEditing(false);
    };

    if (profileLoading) {
        return (
            <div className="w-full m-5 flex items-center justify-center min-h-[400px]">
                <div className="text-lg text-gray-600">Loading profile...</div>
            </div>
        );
    }

    if (!doctorProfile) {
        return (
            <div className="w-full m-5 flex items-center bg-mossyFog justify-center min-h-[400px]">
                <div className="text-lg text-gray-600">
                    Unable to load profile
                </div>
            </div>
        );
    }

    return (
        <div className="w-full m-5">
            <div className=" border  shadow-sm bg-oliveWhisper">
                <div className="flex items-center justify-between p-6 border-b">
                    <h1 className="text-2xl font-semibold text-darkMossyFog">
                        My Profile
                    </h1>
                    {!isEditing ? (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="px-4 py-2 bg-darkSageGlow text-white rounded-full hover:bg-darkMossyFog transition-colors"
                        >
                            Edit Profile
                        </button>
                    ) : (
                        <div className="space-x-3">
                            <button
                                onClick={handleCancel}
                                className="px-4 py-2  bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={profileLoading}
                                className="px-4 py-2 bg-darkSageGlow text-white rounded-md hover:bg-darkMossyFog disabled:opacity-50 transition-colors"
                            >
                                {profileLoading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    )}
                </div>

                <div className="p-6">
                    <div className="flex items-center space-x-6 mb-8">
                        <div className="flex-shrink-0">
                            <img
                                src={
                                    doctorProfile.photo ||
                                    "/placeholder-doctor.png"
                                }
                                alt={doctorProfile.fullName}
                                className="w-32 h-32 rounded-full border-mossyFog object-cover border-4"
                            />
                        </div>

                        <div className="flex-grow">
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <p className="text-xl font-semibold text-gray-900">
                                    {doctorProfile.fullName}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Email:
                            </span>
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    {doctorProfile.email}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Speciality:
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="speciality"
                                    value={formData.speciality}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    {doctorProfile.speciality}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Qualification:
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    {doctorProfile.qualification}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Years of Service:
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="yearsOfService"
                                    value={formData.yearsOfService}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    {doctorProfile.yearsOfService}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Consultation Fee:
                            </span>
                            {isEditing ? (
                                <input
                                    type="number"
                                    name="consultationFee"
                                    value={formData.consultationFee}
                                    onChange={handleInputChange}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    ${doctorProfile.consultationFee}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Availability:
                            </span>
                            {isEditing ? (
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="available"
                                        checked={formData.available}
                                        onChange={handleInputChange}
                                        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <span className="text-gray-700">
                                        Available for appointments
                                    </span>
                                </div>
                            ) : (
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        doctorProfile.available
                                            ? "bg-green-100 text-green-800"
                                            : "bg-red-100 text-red-800"
                                    }`}
                                >
                                    {doctorProfile.available
                                        ? "Available"
                                        : "Unavailable"}
                                </span>
                            )}
                        </div>

                        <div className="flex">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Location:
                            </span>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleInputChange}
                                    placeholder="Street, City"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ) : (
                                <span className="text-gray-900">
                                    {doctorProfile.location?.line1 &&
                                    doctorProfile.location?.line2
                                        ? `${doctorProfile.location.line1}, ${doctorProfile.location.line2}`
                                        : "No location provided"}
                                </span>
                            )}
                        </div>

                        <div className="flex items-start">
                            <span className="w-40 text-sm font-medium text-gray-600">
                                Bio:
                            </span>
                            {isEditing ? (
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
                                    placeholder="Tell patients about yourself..."
                                />
                            ) : (
                                <span className="text-gray-900 leading-relaxed">
                                    {doctorProfile.bio || "No bio provided"}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
