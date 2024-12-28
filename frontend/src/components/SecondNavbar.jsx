import React from "react";
import { Link, useLocation } from "react-router-dom";

function SecondNavbar() {
  const location = useLocation();

  return (
    <div>
      {/* add this tala ko div in new component */}

      <div className=" px-10">
        <div className="mt-0  px-10 py-1.5  grid grid-cols-4 place-items-center bg-yellow-400/10 shadow-sm rounded-md">
          <Link
            to="#"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text w-fit text-xl font-semibold text-lime-600  "
          >
            All Books{" "}
            <div className="h-1 bg-gradient-to-r  mt-2 from-yellow-400 to-yellow-600 rounded-md"></div>
          </Link>
          <Link
            to="#"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text w-fit text-xl font-semibold text-lime-600  "
          >
            Featured Books{" "}
            {/* <div className="h-1 bg-gradient-to-r  mt-2 from-yellow-400 to-yellow-600 rounded-md"></div> */}
          </Link>
          <div className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text w-fit text-xl font-semibold text-lime-600  ">
            Trending Books{" "}
            {/* <div className="h-1 bg-gradient-to-r  mt-2 from-yellow-400 to-yellow-600 rounded-md"></div> */}
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-green-400 text-transparent bg-clip-text w-fit text-xl font-semibold text-lime-600  ">
            Most Popular Books{" "}
            {/* <div className="h-1 bg-gradient-to-r  mt-2 from-yellow-400 to-yellow-600 rounded-md"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondNavbar;
