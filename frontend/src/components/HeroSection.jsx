import React from "react";
import FirstImage from "../assets/images/image1.png";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <>
      <div className="px-10 flex items-center justify-between">
        {/* left side */}
        <div className="flex flex-col flex-1">
          <div className="text-6xl mt-2 font-bold flex items-center gap-4 bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text py-10">
            <span> Library</span> <span> Management</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugiat iure dolore! Molestias, quas debitis consectetur cupiditate
            assumenda quidem doloribus modi, necessitatibus quisquam asperiores
            fuga molestiae quasi, eligendi soluta delectus!
          </p>
          <div className=" space-x-4">
            <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg mt-4 w-52 font-semibold">
              Login
            </button>
            <button
              className="bg-lime-500 text-white py-2 px-4 rounded-lg mt-4 w-52 font-semibold"
              onClick={() => navigate("/signup-page")}
            >
              Signup
            </button>
          </div>
        </div>

        {/* right side */}
        <div className=" h-[60vh] w-full flex-1 ">
          <div className=" overflow-hidden">
            <img src={FirstImage} className="h-full w-full ml-20 " />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
