import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";

const Navbar = () => {
    const { aToken, setAToken } = useContext(AdminContext);

    const navigate = useNavigate();
    const logout = () => {
        navigate("/");
        aToken && setAToken("");
        aToken && localStorage.removeItem("aToken");
    };
    return (
        <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-mintMist ">
            <div className="flex items-center gap-2 text-xs">
                <img
                    className="max-w-[150px] h-[110px] cursor-pointer relative -top-2"
                    src={assets.admin_logo}
                    alt=""
                />
                <p className="border px-2.5 py-0.5 rounded-full border-sageGlow text-mossyFog">
                    {aToken ? "Admin" : "Doctor"}
                </p>
            </div>
            <button
                onClick={logout}
                className="bg-darkMossyFog text-mintMist px-4 py-2 rounded-full font-light hidden md:block"
            >
                Logout
            </button>
        </div>
    );
};

export default Navbar;
