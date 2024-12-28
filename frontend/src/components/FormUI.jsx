import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function FormUI() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  //function to register the student
  async function registerStudent(e) {
    e.preventDefault();

    try {
      const result = await fetch("/proxy/student-register", {
        headers: { "Content-type": "application/json" },
        method: "POST",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await result.json();

      if (data.status === 200) {
        toast.success(data.msg);
        navigate("/");
        console.log(data);
      } else {
        toast.error(data.msg);
        navigate("/signup-page");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  }

  return (
    <>
      <div className=" h-screen flex justify-center items-center bg-[url('https://img.freepik.com/free-vector/set-torii-gates-water_52683-44986.jpg?t=st=1734932673~exp=1734936273~hmac=99376bb3c41195207dbaf898aac1af4d44573945c3d473468a47e51e131ba9f9&w=1480')] bg-cover bg-no-repeat bg-center">
        <form
          onSubmit={registerStudent}
          className="bg-white/40 p-10 max-w-md rounded-xl shadow-md backdrop-blur-lg"
        >
          <p className="text-3xl font-semibold mb-4 text-center text-white">
            Signup Form
          </p>
          <input
            className="border border-cyan-500 p-2 w-full rounded-xl mb-4"
            type="text"
            placeholder="Enter your name "
            onChange={(e) => setName(e.target.value)}
          />
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
            Signup
          </button>
        </form>
      </div>
    </>
  );
}

export default FormUI;
