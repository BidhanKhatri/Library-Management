import React from "react";
import FormUI from "./components/FormUI";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage";
import { Routes, Route, useLocation } from "react-router-dom";
import AddBook from "./components/AddBook";
import Navbar from "./components/Navbar";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./adminpages/AdminDashboard";
import DisplayAllBook from "./adminpages/DisplayAllBook";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-page" element={<FormUI />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/login-admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      {location.pathname.includes("/admin") && <AdminDashboard />}
    </>
  );
}

export default App;
