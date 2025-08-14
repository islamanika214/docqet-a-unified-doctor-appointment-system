import axios from "axios";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";
const Login = () => {
    const [state, setState] = useState("Admin");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAToken, backendUrl } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (state === "Admin") {
                const { data } = await axios.post(
                    backendUrl + "/api/admin/login",
                    { email, password }
                );
                if (data.success) {
                    localStorage.setItem("aToken", data.token);
                    setAToken(data.token);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {}
    };

    /*  mintMist, oliveWhisper, sageGlow, mossyFog, deepForest,
            softSunrise, dustyClay, calmSky, warmStone, earthyBrown,
            darkMossyFog, darkSageGlow */

    return (
        <form
            onSubmit={onSubmitHandler}
            className="min-h-[80vh] flex items-center z-10 relative"
        >
            <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-md text-mossyFog text-sm shadow-lg bg-white/80">
                <p className="text-2xl font-semibold m-auto">
                    <span className="text-sageGlow"> {state} </span> Login
                </p>
                <div className="w-full">
                    <p>Email</p>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className="border border-oliveWhisper rounded w-full p-2 mt-1"
                        type="email"
                        required
                    />
                </div>
                <div className="w-full">
                    <p>Password</p>

                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className="border border-oliveWhisper rounded w-full p-2 mt-1"
                        type="password"
                        required
                    />
                </div>
                <button className="bg-mossyFog text-white w-full py-2 rounded-md text-base hover:bg-darkMossyFog">
                    Login
                </button>
                {state === "Admin" ? (
                    <p>
                        Doctor Login?
                        <span
                            className="text-darkMossyFog underline cursor-pointer"
                            onClick={() => setState("Doctor")}
                        >
                            Click here
                        </span>
                    </p>
                ) : (
                    <p>
                        Admin Login?
                        <span
                            className="text-darkMossyFog underline cursor-pointer"
                            onClick={() => setState("Admin")}
                        >
                            Click here
                        </span>
                    </p>
                )}
            </div>
        </form>
    );
};

export default Login;
