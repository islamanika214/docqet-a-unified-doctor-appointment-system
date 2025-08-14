import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AdminContext } from "./context/AdminContext";
import AddDoctor from "./pages/AdminPages/AddDoctor";
import AllAppointments from "./pages/AdminPages/AllAppointments";
import Dashboard from "./pages/AdminPages/Dashboard";
import DoctorsList from "./pages/AdminPages/DoctorsList";

const App = () => {
    const { aToken } = useContext(AdminContext);

    return aToken ? (
        <div className="bg-white">
            <ToastContainer />
            <Navbar />
            <div className="flex items-start">
                <Sidebar />
                <Routes>
                    <Route path="/" element={<></>} />
                    <Route path="/admin-dashboard" element={<Dashboard />} />
                    <Route
                        path="/all-appointments"
                        element={<AllAppointments />}
                    />
                    <Route path="/add-doctor" element={<AddDoctor />} />
                    <Route path="/doctor-list" element={<DoctorsList />} />
                </Routes>
            </div>
        </div>
    ) : (
        <>
            <Login />
            <ToastContainer />
        </>
    );
};

export default App;
