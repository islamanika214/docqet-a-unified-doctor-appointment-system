import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { AdminContext } from "./context/AdminContext";
import { DoctorContext } from "./context/DoctorContext";
import AddDoctor from "./pages/AdminPages/AddDoctor";
import AllAppointments from "./pages/AdminPages/AllAppointments";
import Dashboard from "./pages/AdminPages/Dashboard";
import DoctorsList from "./pages/AdminPages/DoctorsList";
import DoctorAppointment from "./pages/DoctorPages/DoctorAppointment";
import DoctorDashboard from "./pages/DoctorPages/DoctorDashboard";
import DoctorProfile from "./pages/DoctorPages/DoctorProfile";

const App = () => {
    const { aToken } = useContext(AdminContext);
    const { dToken } = useContext(DoctorContext);

    return aToken || dToken ? (
        <div className="bg-white">
            <ToastContainer />
            <Navbar />
            <div className="flex items-start">
                <Sidebar />
                <Routes>
                    {/* Admin Route */}
                    <Route path="/" element={<></>} />
                    <Route path="/admin-dashboard" element={<Dashboard />} />
                    <Route
                        path="/all-appointments"
                        element={<AllAppointments />}
                    />
                    <Route path="/add-doctor" element={<AddDoctor />} />
                    <Route path="/doctor-list" element={<DoctorsList />} />

                    {/* Doctor Route */}

                    <Route
                        path="/doctor-dashboard"
                        element={<DoctorDashboard />}
                    />
                    <Route
                        path="/doctor-appointments"
                        element={<DoctorAppointment />}
                    />
                    <Route path="/doctor-profile" element={<DoctorProfile />} />
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
