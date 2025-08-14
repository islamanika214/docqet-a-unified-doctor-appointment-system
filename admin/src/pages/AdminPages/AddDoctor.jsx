import { assets } from "../../assets/assets";

const AddDoctor = () => {
    return (
        <form className="m-5 w-full">
            <p className="mb-3 text-lg font-medium text-mossyFog">Add Doctor</p>
            <div className="bg-oliveWhisper px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
                <div>
                    <label htmlFor="doc-img">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id="doc-img" hidden />
                    <p>
                        Upload doctor <br /> picture
                    </p>
                </div>

                <div>
                    <div>
                        <div>
                            <p>Doctor Name</p>
                            <input
                                type="text"
                                placeholder="Enter Doctor Name"
                                required
                            />
                        </div>
                        <div>
                            <p>Doctor Email</p>
                            <input
                                type="email"
                                placeholder="Enter Doctor Email"
                                required
                            />
                        </div>
                        <div>
                            <p>Doctor Experience</p>
                            <select name="" id="">
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

                        <div>
                            <p>Doctor Appointment fees</p>
                            <input
                                type="number"
                                placeholder="Enter Doctor Appointment fees"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <div>
                            <p>Speciality</p>
                            <select name="" id="">
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

                        <div>
                            <p>Doctor Qualification</p>
                            <input
                                type="text"
                                placeholder="Enter Doctor Qualification"
                                required
                            />
                        </div>

                        <div>
                            <p>Location</p>
                            <input type="text" placeholder="Street" required />
                            <input type="text" placeholder="Area" required />
                        </div>
                    </div>
                </div>

                <div>
                    <p>About Doctor</p>
                    <textarea
                        type="text"
                        placeholder="Write About Doctor"
                        rows={5}
                        required
                    />
                </div>

                <button>Add Doctor</button>
            </div>
        </form>
    );
};

export default AddDoctor;
