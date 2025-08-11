import { useState } from "react";
import { assets } from "../assets/assets";

const Login = () => {
    const [state, setState] = useState("Sign Up");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [fullName, setFullName] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
    };
    return (
        <div
            className="relative  min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${assets.login_background})` }}
        >
            <div className="absolute inset-0 bg-sageGlow/30 z-0"></div>
            <form className="min-h-[80vh] flex items-center z-10 relative">
                <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-md text-darkSageGlow text-sm shadow-lg bg-white/80">
                    <p className="text-2xl font-semibold">
                        {state === "Sign Up" ? "Create Account" : "Login"}
                    </p>
                    <p>
                        Please{" "}
                        {state === "Sign Up" ? "Create Account" : "Sign In"} to
                        Book Appointment
                    </p>
                    {state === "Sign Up" && (
                        <div className="w-full">
                            <p>Full Name</p>
                            <input
                                className="border border-oliveWhisper rounded w-full p-2 mt-1"
                                type="text"
                                placeholder="Enter your full name"
                                onChange={(e) => setFullName(e.target.fullName)}
                                value={fullName}
                                required
                            />
                        </div>
                    )}

                    <div className="w-full">
                        <p>Email</p>
                        <input
                            placeholder="Enter your email"
                            className="border border-oliveWhisper rounded w-full p-2 mt-1"
                            type="email"
                            onChange={(e) => setEmail(e.target.email)}
                            value={email}
                            required
                        />
                    </div>
                    <div className="w-full">
                        <p>Password</p>
                        <input
                            placeholder="Enter your password"
                            className="border border-oliveWhisper rounded w-full p-2 mt-1"
                            type="password"
                            onChange={(e) => setPassword(e.target.password)}
                            value={password}
                            required
                        />
                    </div>
                    <button className="bg-darkSageGlow text-white w-full py-2 rounded-md text-base hover:bg-darkMossyFog">
                        {state === "Sign Up" ? "Create Account" : "Login"}
                    </button>
                    {state === "Sign Up" ? (
                        <p className="text-black">
                            Already have an account?{" "}
                            <span
                                onClick={() => setState("Login")}
                                className="text-darkMossyFog underline cursor-pointer"
                            >
                                Login here
                            </span>
                        </p>
                    ) : (
                        <p className="text-black">
                            Create an new account?{" "}
                            <span
                                onClick={() => setState("Sign Up")}
                                className="text-darkMossyFog underline cursor-pointer"
                            >
                                Click here
                            </span>
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Login;

{
    /*  mintMist, oliveWhisper, sageGlow, mossyFog, deepForest,
            softSunrise, dustyClay, calmSky, warmStone, earthyBrown,
            darkMossyFog, darkSageGlow */
}
