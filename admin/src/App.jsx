import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import { AdminContext } from "./context/AdminContext";

const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div className="bg-mintMist">
            <ToastContainer />
            <Navbar />
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
