import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { DoctorAppContext } from "../context/DoctorAppContexts";
const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const { token, setToken } = useContext(DoctorAppContext);

    const logout = () => {
        setToken(false);
        localStorage.removeItem("token");
    };

    {
    }
    return (
        // <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <div className="flex items-center justify-between text-sm py-4 px-6 mb-5 bg-mintMist shadow-md sticky top-0 z-50 transition-all duration-300">
            <img
                onClick={() => navigate("/")}
                src={assets.logo}
                alt="DOCQET Logo"
                className="max-w-[150px] h-[110px] cursor-pointer relative -top-2"
            />

            <ul className="hidden md:flex items-start gap-5 font-medium">
                <NavLink to="/">
                    {/* <li className='py-1 text-yellow-600'>HOME</li> */}
                    <li className="py-1 text-darkMossyFog hover:text-slate-600 transition duration-300">
                        HOME
                    </li>

                    <hr className="border-none outline-none h-0.5 bg-oliveWhisper w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/doctors">
                    <li className="py-1 text-darkMossyFog hover:text-slate-600 transition duration-300">
                        DOCTORS LIST
                    </li>
                    <hr className="border-none outline-none h-0.5 bg-oliveWhisper w-3/5 m-auto hidden" />
                </NavLink>
                <NavLink to="/about">
                    <li className="py-1 text-darkMossyFog hover:text-slate-600 transition duration-300">
                        ABOUT
                    </li>
                    <hr
                        className="border-none outline-none h-0.5 bg-oliveWhisper w-3/5 m-auto hidden"
                        hidden
                    />
                </NavLink>
                <NavLink to="/contact">
                    <li className="py-1 text-darkMossyFog hover:text-slate-600 transition duration-300">
                        CONTACT
                    </li>
                    <hr className="border-none outline-none h-0.5 bg-oliveWhisper w-3/5 m-auto hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-4">
                {token ? (
                    <div className="flex flex-col items-center gap-2 cursor-pointer group relative">
                        <img
                            className="w-10 mt-5 rounded-full"
                            src={assets.profile_pic}
                            alt=""
                        />
                        <img
                            className="w-3"
                            src={assets.dropdown_icon}
                            alt=""
                        />
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 text-base font-medium text-goldie z-20 hidden group-hover:block">
                            <div className="min-w-48 bg-oliveWhisper rounded flex flex-col gap-4 p-4 shadow-md">
                                <p
                                    onClick={() => navigate("my-profile")}
                                    className="hover:text-darkSageGlow cursor-pointer"
                                >
                                    My profile
                                </p>
                                <p
                                    onClick={() => navigate("my-appointments")}
                                    className="hover:text-darkSageGlow cursor-pointer"
                                >
                                    My Appointments
                                </p>
                                <p
                                    onClick={logout}
                                    className="hover:text-darkSageGlow cursor-pointer"
                                >
                                    Logout
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-darkMossyFog text-mintMist px-4 py-2 rounded-full font-light hidden md:block"
                    >
                        Create Account
                    </button>
                )}

                <img
                    onClick={() => setShowMenu(true)}
                    className="w-6 md:hidden mt-0"
                    src={assets.menu_icon}
                    alt=""
                />

                {/* mobile menu view */}
                <div
                    className={` ${
                        showMenu ? "fixed w-full" : "h-0 w-0"
                    } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-mintMist transition-all`}
                >
                    <div className="flex flex-center justify-between px-5 py-6">
                        <img
                            className="max-w-[150px] h-[110px] cursor-pointer relative -top-2"
                            src={assets.logo}
                            alt=""
                        />
                        <img
                            className="w-7 h-7 relative top-8"
                            onClick={() => setShowMenu(false)}
                            src={assets.cross_icon}
                            alt=""
                        />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-darkMossyFog ">
                        <NavLink onClick={() => setShowMenu(false)} to="/">
                            <p className="px-4 py-2 rounded-sm inline-block">
                                HOME
                            </p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/doctors"
                        >
                            <p className="px-4 py-2 rounded-sm inline-block">
                                DOCTOS LIST
                            </p>
                        </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to="/about">
                            <p className="px-4 py-2 rounded-sm inline-block">
                                ABOUT
                            </p>
                        </NavLink>
                        <NavLink
                            onClick={() => setShowMenu(false)}
                            to="/contact"
                        >
                            <p className="px-4 py-2 rounded-sm inline-block">
                                CONTACT
                            </p>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

{
    /*  mintMist, oliveWhisper, sageGlow, mossyFog, deepForest,
            softSunrise, dustyClay, calmSky, warmStone, earthyBrown,
            darkMossyFog, darkSageGlow */
}
