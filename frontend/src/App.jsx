import React from "react";
import FormUI from "./components/FormUI";
import { ToastContainer } from "react-toastify";
import HomePage from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import AddBook from "./components/AddBook";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <ToastContainer />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup-page" element={<FormUI />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </>
  );
}

export default App;
