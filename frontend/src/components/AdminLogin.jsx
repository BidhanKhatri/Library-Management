import React, { useState } from "react";
import { toast } from "react-toastify";
import AdminBackgroundImg from "../assets/images/admin-bg.jpg";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //function to login for admin
  async function loginAdmin(e) {
    e.preventDefault();

    try {
      const result = await fetch("/proxy/admin-login", {
        headers: { "content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      const data = await result.json();
      console.log(data);

      if (data && data.status === 200) {
        toast.success(data.msg);
        navigate("/admin/dashboard");
      } else {
        toast.error(data.msg);
      }
    } catch (error) {
      toast.error(data.msg || "Something went wrong");
    }
  }

  return (
    <>
      <div
        className=" h-screen flex justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${AdminBackgroundImg})` }}
      >
        <form
          onSubmit={loginAdmin}
          className="bg-white/40 p-10 max-w-md rounded-xl shadow-md backdrop-blur-lg"
        >
          <p className="text-3xl font-semibold mb-4 text-center ">
            Admin Login
          </p>
          <input
            className="border border-cyan-500 p-2 w-full rounded-xl mb-4"
            type="email"
            placeholder="Enter your email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="border border-cyan-500 p-2 w-full rounded-xl mb-4"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-purple-500 p-2 text-white rounded-xl w-full hover:bg-purple-700
        transition-all duration-700 "
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default AdminLogin;
